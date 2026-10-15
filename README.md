# Phishing-Detection-System
A Python Flask-based Phishing Detection System integrating machine learning, URL analysis, SQLite database support, and a Chrome extension to promote safer browsing and phishing awareness.
# 🛡️ Phishing Detection System

A web-based **Phishing Detection System** designed to help users identify suspicious URLs and improve online security awareness. The project uses Python, Flask, and a machine-learning model from Hugging Face to explore URL security and phishing-related analysis.

##  OutPut:
<img width="1447" height="691" alt="image" src="https://github.com/user-attachments/assets/d77a448d-dbf0-4c6f-84fd-5da98d870466" />


## 🚀 Features

- **URL Analysis:** Enter a URL for analysis through the web interface.
- **Machine Learning Integration:** Uses a Hugging Face Transformer model.
- **Web Application:** Flask-based backend.
- **Database Support:** SQLite database for URL-related records.
- **User Interface:** Web pages for user registration, login, dashboard, and analysis.
- **Chrome Extension:** Includes extension files for browser-based interaction.
- **Security Awareness:** Helps users learn to be cautious with suspicious links.

## 🛠️ Technologies Used

- **Programming Language:** Python
- **Backend:** Flask
- **Frontend:** HTML, CSS, JavaScript
- **Database:** SQLite
- **Machine Learning:** PyTorch, Hugging Face Transformers
- **Browser Extension:** JavaScript, HTML, Chrome Extension Manifest

## 📂 Project Structure

```text
Phishing_detection/
│
├── Phishing_detection/
│   ├── app.py
│   └── templates/
│       └── index.html
│
├── background.js
├── content.js
├── manifest.json
├── popup.html
├── popup.js
├── README.md
└── .venv/
```

*Note: Update this structure to match the actual files and folders in your repository. Do not upload your `.venv` folder to GitHub.*

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your repository's actual URL.

### 2. Open the project folder

```bash
cd Phishing_detection/Phishing_detection
```

### 3. Create and activate a virtual environment

On Windows:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

### 4. Install dependencies

```bash
pip install flask flask-sqlalchemy requests numpy transformers torch
```

### 5. Run the application

```bash
python app.py
```

### 6. Open in your browser

Visit:

http://127.0.0.1:5000

Keep the terminal open while the application is running.

## 🧠 Machine Learning Model

The application loads the Hugging Face model:

`cardiffnlp/twitter-roberta-base-sentiment-latest`

This is a sentiment-analysis model. Its successful loading does **not** establish that it can reliably classify phishing URLs. A dedicated phishing-classification model or validated phishing-detection logic is needed for dependable phishing predictions.

## 🔐 Security Notice

- Never enter real passwords or sensitive information into an unverified website.
- Do not rely solely on this project to determine whether a URL is safe.
- A URL that appears legitimate may still be malicious.
- Validate detection results using appropriate security testing before real-world use.

## 🎯 Project Objective

The objective of this project is to explore web application development, machine-learning integration, database handling, and phishing-security awareness through a Python-based application.

## 🔮 Future Enhancements

- Integrate a model trained specifically for phishing URL classification.
- Improve URL feature extraction and detection accuracy.
- Connect the analysis interface to the backend prediction endpoint.
- Complete and test registration, login, dashboard, and history pages.
- Improve Chrome extension functionality.
- Add URL analysis history, reports, and security recommendations.

---

*This project is intended for educational purposes and security awareness.*
