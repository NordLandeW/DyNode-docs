import os
import json
import argparse

def collect_markdown_files(root_dir, exclude_dirs=[]):
    md_files = {}
    for dirpath, dirnames, filenames in os.walk(root_dir):
        # 排除指定的目录
        if any(excluded in dirpath.split(os.sep) for excluded in exclude_dirs):
            continue
        
        for filename in filenames:
            if filename.endswith(".md"):  # 只处理 Markdown 文件
                file_path = os.path.join(dirpath, filename)
                relative_path = os.path.relpath(file_path, root_dir)
                
                with open(file_path, "r", encoding="utf-8") as file:
                    content = file.read()
                
                md_files[relative_path] = content
    return md_files

def save_to_json(data, output_path):
    with open(output_path, "w", encoding="utf-8") as json_file:
        json.dump(data, json_file, ensure_ascii=False, indent=4)

def restore_markdown_files(json_path, output_dir):
    with open(json_path, "r", encoding="utf-8") as json_file:
        md_files = json.load(json_file)
    
    for relative_path, content in md_files.items():
        output_path = os.path.join(output_dir, relative_path)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        
        with open(output_path, "w", encoding="utf-8") as file:
            file.write(content)
    
    print(f"翻译后的 Markdown 文件已恢复到 {output_dir}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Markdown 文件提取和恢复脚本")
    parser.add_argument("mode", choices=["extract", "restore"], help="选择操作模式：提取 (extract) 或 还原 (restore)")
    parser.add_argument("--folder", required=False, help="指定子文件夹（仅用于恢复模式）")
    
    args = parser.parse_args()
    root_directory = "../docs"
    output_json_file = "markdown_files.json"
    en_output_json_file = "markdown_files_en.json"
    
    if args.mode == "extract":
        md_contents = collect_markdown_files(root_directory, exclude_dirs=["en"])
        save_to_json(md_contents, output_json_file)
        print(f"Markdown 文件内容已保存到 {output_json_file}")
        
        en_contents = collect_markdown_files(os.path.join(root_directory, "en"))
        save_to_json(en_contents, en_output_json_file)
        print(f"Markdown 文件内容（en）已保存到 {en_output_json_file}")
        
    elif args.mode == "restore":
        if not args.folder:
            print("错误：恢复模式需要指定 --folder 参数。")
            exit(1)
        target_folder = os.path.join(root_directory, args.folder)
        restore_markdown_files(en_output_json_file, target_folder)
