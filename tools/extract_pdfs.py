from pathlib import Path
from pypdf import PdfReader


def extract(pdf_path: str, out_path: str) -> None:
    p = Path(pdf_path)
    if not p.exists():
        raise FileNotFoundError(f"{pdf_path} not found")

    reader = PdfReader(str(p))
    chunks: list[str] = []
    chunks.append(f"file={pdf_path}")
    chunks.append(f"pages={len(reader.pages)}")

    for i, page in enumerate(reader.pages, start=1):
        text = (page.extract_text() or "").strip()
        chunks.append(f"--- page {i} ---")
        chunks.append(text)

    Path(out_path).write_text("\n".join(chunks), encoding="utf-8")


def main() -> None:
    extract("Profile.pdf", "extracted_profile.txt")
    extract("Priyanshu_Tyagi_Resume.pdf", "extracted_resume.txt")
    print("Wrote extracted_profile.txt and extracted_resume.txt")


if __name__ == "__main__":
    main()
