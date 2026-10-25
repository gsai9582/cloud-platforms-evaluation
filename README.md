# Cloud Computing Platforms Evaluation Project

An interactive benchmarking dashboard and analytical evaluation comparing the major cloud infrastructure providers: **Amazon Web Services (AWS)**, **Microsoft Azure**, and **Google Cloud Platform (GCP)**.

---

## 🎯 Project Overview

This application serves as an architectural decision matrix and visual dashboard for engineering teams to evaluate cloud platforms based on compute efficiency, storage options, security compliance, pricing tiers, and DevOps integration.

For the full comparative analysis document, see [**`CLOUD_ANALYSIS_REPORT.md`**](./CLOUD_ANALYSIS_REPORT.md).

---

## ✨ Features

- **Interactive Comparison Matrix:** Filter and compare compute instances, managed Kubernetes engines (EKS, AKS, GKE), and serverless offerings.
- **Cost & SLA Visualizer:** Side-by-side cost projections and SLA compliance metrics.
- **Dynamic Metrics Filtering:** Toggle between developer tooling, AI/ML APIs, and enterprise compliance standards.
- **Modern Responsive UI:** Built with React 18, Vite, and Tailwind-inspired responsive CSS.

---

## 🛠️ Tech Stack

- **Frontend:** React 18, Vite
- **Styling:** Modular Modern CSS
- **Data Architecture:** Structured JSON datasets (`src/data/cloud-data.js`)
- **Linting & Code Quality:** ESLint

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/gsai9582/cloud-platforms-evaluation.git
   cd cloud-platforms-evaluation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📊 Summary Evaluation Matrix

| Capability | AWS | Microsoft Azure | Google Cloud (GCP) |
|---|---|---|---|
| **Market Maturity** | Pioneer / Largest Ecosystem | Deep Enterprise & Windows Integration | Leader in Data, AI & Kubernetes |
| **Containers** | Amazon EKS / ECS | Azure Kubernetes Service (AKS) | Google Kubernetes Engine (GKE) |
| **Serverless** | AWS Lambda | Azure Functions | Google Cloud Functions / Cloud Run |
| **AI / ML** | Amazon SageMaker, Bedrock | Azure OpenAI, Cognitive Services | Vertex AI, Gemini Models |

---

## 📄 License
MIT License.
