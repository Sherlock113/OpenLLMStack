---
title: "40+ Open Source LLM Statistics & Trends (2026)"
description: "A curated roundup of the latest open source LLM statistics: how many open models exist, adoption and usage, the open vs. closed performance gap, costs, and who's building them."
date: "2026-06-30"
author: "Sherlock Xu"
tags: ["Open Source", "Statistics"]
draft: false
---

Open source LLMs went from a research curiosity to the backbone of real production systems in under three years. They now power coding assistants, agents, and enterprise pipelines, and in some fields they've overtaken the proprietary models that defined the early days of the boom.

So how big is the open source LLM ecosystem today? And how fast is it actually growing?

I pulled together the most useful open source LLM statistics I could find, all from primary sources like the Stanford AI Index, Hugging Face, Meta, OpenRouter, and the Stack Overflow Developer Survey. Each section links to the original sources so you can cite them directly.

## Top Open Source LLM Statistics

- Hugging Face hosts **over 2 million public models**, up from 1 million just over a year earlier.
- The Llama models from Meta passed **1.2 billion downloads** by April 2025.
- The performance gap between the top open and closed models shrank from **8.04% to 1.70%** in a single year.
- For a given level of performance, LLM inference cost is falling **about 10x per year**.
- Chinese open models accounted for **41% of all Hugging Face downloads** in 2025, overtaking the U.S.
- The Qwen family from Alibaba now has **over 113,000 derivative models**, more than Google and Meta combined.
- Open source models processed **roughly one-third of all tokens** on OpenRouter by late 2025.
- **84% of developers** now use or plan to use AI tools in their workflow.

## How many open source LLMs are there?

There are **over 2 million public models** on Hugging Face, the largest hub for open models. The platform also hosts more than 500,000 public datasets and serves a community of over 13 million users.

The pace of growth is the real story. The first million models took more than 1,000 days to accumulate after tracking began in March 2022. The second million arrived in just 335 days.

| Milestone | Time to reach |
| --- | --- |
| First 1 million models | 1,000+ days |
| Second 1 million models | 335 days |

Most of those models see little use. About half of all models on the Hub have fewer than 200 total downloads, and the top 200 models, just 0.01% of the total, account for 49.6% of all downloads.

The models people actually pull are also getting much larger. The mean size of a downloaded model grew from 827 million parameters in 2023 to 20.8 billion parameters in 2025.

Sources: [Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026), [AI World](https://aiworld.eu/story/hugging-faces-two-million-models-and-counting)

## Open source LLM adoption and usage

Open models have moved well past experimentation. On OpenRouter, which routed more than 100 trillion tokens in a year, open source models grew to roughly one-third of all usage by late 2025. The latest estimation is that it will achieve ~1.5 quadrillion tokens for 2026.

Three open families dominate that usage. DeepSeek led with 14.37 trillion tokens processed between November 2024 and November 2025, followed by Qwen and Llama.

| Open model family | Tokens processed (Nov 2024 to Nov 2025) |
| --- | --- |
| DeepSeek | 14.37 trillion |
| Qwen | 5.59 trillion |
| Llama | 3.96 trillion |

Developer adoption of AI tooling is now near-universal. 84% of respondents to the 2025 Stack Overflow Developer Survey use or plan to use AI tools, up from 76% the year before, and 51% of professional developers use them daily.

Sources: [Menlo Ventures](https://menlovc.com/perspective/openrouter-now-processes-more-than-a-quadrillion-tokens-a-year/), [OpenRouter](https://openrouter.ai/state-of-ai), [Stack Overflow](https://survey.stackoverflow.co/2025/ai/)

## The most popular open source LLMs

For most of the open source era, **Llama by Meta was the default open model.** It reached 650 million downloads by December 2024, crossed 1 billion in March 2025, and hit 1.2 billion by April 2025.

| Date | Llama cumulative downloads |
| --- | --- |
| December 2024 | ~650 million |
| March 2025 | 1 billion |
| April 2025 | 1.2 billion |

But 2025 was the year Qwen from Alibaba took the crown. Qwen overtook Llama in cumulative Hugging Face downloads by October 2025, and in December the single-month downloads of Qwen exceeded the combined total of the next eight most popular models (Meta, DeepSeek, OpenAI, Mistral, NVIDIA, Zhipu.AI, Moonshot and MiniMax).

Qwen is also the most built-on open model in the world. The family has over 113,000 direct derivative models, and more than 200,000 when you count every Qwen-tagged model, giving Alibaba more derivatives than Google and Meta combined.

You can browse the leading open models, their licenses, and recommended hardware on the [OpenLLMStack models page](/models).

Sources: [Meta](https://about.fb.com/news/2025/03/celebrating-1-billion-downloads-llama/), [TechCrunch](https://techcrunch.com/2025/04/29/meta-says-its-llama-ai-models-have-been-downloaded-1-2b-times/), [Xinhua](https://english.news.cn/20260113/004b0522f987475cbf83ffc3a8d009aa/c.html), [Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026)

## Open vs. closed source: the performance gap

The quality gap between the best open and closed models has nearly disappeared. On the Chatbot Arena leaderboard, the top closed model led the top open model by 8.04% in January 2024. By February 2025, that lead had shrunk to just 1.70%.

| Date | Closed-vs-open performance gap |
| --- | --- |
| January 2024 | 8.04% |
| February 2025 | 1.70% |

In other words, the open source frontier closed roughly 80% of the gap in a single year. Releases like DeepSeek and Qwen models drove most of that convergence.

Source: [Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report/technical-performance)

## Where open source models come from

The center of gravity in open source AI has shifted. Chinese models made up 41% of all Hugging Face downloads in 2025, and China surpassed the U.S. in monthly downloads during the year.

The same shift shows up in usage. The share of U.S. models on OpenRouter fell from about 70% to 30% over the course of a year.

Open source development is also less corporate than it used to be. The industry share of model development on Hugging Face dropped from roughly 70% before 2022 to 37% in 2025, while independent and unaffiliated developers accounted for 39% of downloads.

Sources: [Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026), [OfficeChai](https://officechai.com/ai/share-of-us-models-being-used-on-openrouter-has-collapsed-from-70-to-30-over-the-past-year/)

## The collapsing cost of open source inference

Running open models keeps getting cheaper, fast. Andreessen Horowitz tracks a trend they call LLMflation: for a given level of performance, inference cost has fallen about 10x per year, a roughly 1,000-fold drop over three years.

Cloud prices for open-weight models are now converging toward the raw hardware cost of electricity, around $0.20 to $0.50 per million tokens. That makes a capable open model on commodity hardware genuinely competitive with frontier APIs.

DeepSeek shows how wide the gap has become. The DeepSeek-V4-Flash API charges $0.14 per million input tokens (cache miss) and $0.28 per million output tokens, roughly 97%-99% less than the $5 and $30 that GPT-5.5 API charges for the same volume.

A big share of that gain comes from smarter serving, not just cheaper chips. You can see the techniques behind it on the OpenLLMStack [optimizations page](/optimizations).

Sources: [a16z](https://a16z.com/llmflation-llm-inference-cost/), [DeepSeek API Docs](https://api-docs.deepseek.com/quick_start/pricing), [OpenAI API Pricing](https://developers.openai.com/api/docs/pricing)

## DeepSeek R1: the breakout moment for open source AI

No single release did more for the profile of open source AI than DeepSeek R1. The model launched on January 20, 2025, and within days the DeepSeek app climbed to No. 1 on the U.S. Apple App Store, displacing ChatGPT and topping the charts in more than 50 countries.

The download surge was almost vertical. The app reached 2.6 million downloads across the App Store and Google Play by the Monday after launch, with more than 80% of all downloads coming in the previous seven days, and Appfigures data ranked the app No. 1 worldwide.

The market reaction was just as dramatic. On January 27, 2025, Nvidia lost about $589 billion in market value, the largest single-day loss for any company in history, after DeepSeek showed that a frontier-grade open model could reportedly be trained for around $5.6 million.

You can trace these milestones on the OpenLLMStack [timeline](/timeline).

Sources: [TechCrunch](https://techcrunch.com/2025/01/27/deepseek-displaces-chatgpt-as-the-app-stores-top-app/), [Bloomberg](https://www.bloomberg.com/news/articles/2025-01-27/asml-sinks-as-china-ai-startup-triggers-panic-in-tech-stocks), [Forbes](https://www.forbes.com/sites/dereksaul/2025/01/27/biggest-market-loss-in-history-nvidia-stock-sheds-nearly-600-billion-as-deepseek-shakes-ai-darling/)

## Frequently asked questions

### What is an open source LLM?

Generally speaking, open source LLMs are language models whose architecture, code, and weights are publicly released, so anyone can download them, run them locally, fine-tune them, and deploy them in their own infrastructure. They give teams full control over inference, customization, data privacy, and long-term costs.

However, the term "open source" is often used loosely. Many models are openly available, but their licensing falls under open weights, not traditional open source.

### Which open source LLM is the most popular?

By downloads, Qwen from Alibaba is currently the most popular open source LLM. It overtook Llama by Meta in cumulative Hugging Face downloads in October 2025 and has more derivative models than any other family.

### Are open source models catching up to closed models?

Largely, yes. The performance gap between the best open and closed models narrowed from 8.04% to 1.70% between January 2024 and February 2025 on the Chatbot Arena leaderboard.

### How many open source AI models are there?

Hugging Face, the largest model hub, hosts over 2 million public models as of 2026, though about half have fewer than 200 downloads.

Sources: [Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026), [Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)

## Conclusion

Open source AI in 2025 and 2026 is defined by three trends: models that now rival closed systems on quality, inference costs that have collapsed, and a center of gravity shifting toward Chinese and independent developers. Open source models are no longer the budget option. For a growing share of teams, they're the default.

If you're building on open models, [OpenLLMStack](/) tracks the latest releases, inference engines, and optimization techniques in one place, so you can spend less time keeping up and more time shipping.
