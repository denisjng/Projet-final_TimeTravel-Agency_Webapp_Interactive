import pdfplumber

pdf_path = r'c:\Users\popes\Desktop\Projet-final_TimeTravel-Agency_Webapp_Interactive\Consignes\Consignes - TimeTravel Agency - Webapp Interactive.pdf'

with pdfplumber.open(pdf_path) as pdf:
    with open('consignes_complete.txt', 'w', encoding='utf-8') as f:
        for i, page in enumerate(pdf.pages):
            text = page.extract_text()
            f.write(f'--- PAGE {i+1} ---\n{text}\n\n')

print("Consignes extraites dans consignes_complete.txt")
