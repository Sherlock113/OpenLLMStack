---
name: "Gemma 4 31B IT"
org: "Google"
logo: "/logos/gemma.webp"
params: "30.7B"
license: "Apache 2.0"
releaseDate: "2026-04"
description: "Dense 30.7B instruction-tuned model from Google's Gemma 4 family. 256K context, multimodal (text, image), runs on 2× H200 or 1× TPU v7 Ironwood."
url: "https://huggingface.co/google/gemma-4-31b-it"
tags: ["Dense", "Multimodal", "Instruction-tuned"]
family: "Gemma"
architecture: "Dense"
contextLength: "256K"
modality: "Multimodal"
modalityNote: "Text, Image"
precisions: ["BF16"]
deployment: ["2× H200", "1× MI325X", "1× TPU v7 Ironwood"]
huggingfacePath: "google/gemma-4-31b-it"
intro: "Gemma 4 31B IT is Google's largest dense open model in the Gemma 4 family, built from the same research as Gemini 3. Released April 2, 2026 under the Apache 2.0 license, it features 256K context, native vision and audio processing, and fluency in over 140 languages. The 31B dense architecture excels at complex logic, offline code generation, and agentic workflows — and notably outperforms many 400B-class rivals on key benchmarks."
vllmRecipe: "https://recipes.vllm.ai/Google/gemma-4-31B-it"
sglangCookbook: "https://docs.sglang.io/cookbook/autoregressive/Google/Gemma4"
releaseBlog: "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/"
blogPosts:
  - title: "Gemma 4: Expanding the Gemmaverse with Apache 2.0"
    url: "https://opensource.googleblog.com/2026/03/gemma-4-expanding-the-gemmaverse-with-apache-20.html"
  - title: "Gemma 4 available on Google Cloud"
    url: "https://cloud.google.com/blog/products/ai-machine-learning/gemma-4-available-on-google-cloud"
  - title: "Gemma 4: How a 31B Model Beats 400B Rivals"
    url: "https://tech-insider.org/google-gemma-4-open-model-benchmarks-2026/"
---
