from pathlib import Path
from pypdf import PdfReader

p = Path("Profile.pdf")
if not p.exists():
    raise FileNotFoundError("Profile.pdf not found")
reader = PdfReader(str(p))
print(f"pages={len(reader.pages)}")
for i, page in enumerate(reader.pages, start=1):
    text = page.extract_text() or ""
    print(f"--- page {i} ---")
    print(text)
