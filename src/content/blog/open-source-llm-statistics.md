---
title: "Open Source LLM Statistics & Trends (2026)"
description: "A curated roundup of the latest open source LLM statistics: how many open models exist, adoption and usage, the open vs. closed performance gap, costs, and who's building them."
date: "2026-06-27"
author: "Sherlock Xu"
tags: ["Open Source", "Statistics"]
draft: false
---

Open source LLMs went from a research curiosity to the backbone of real production systems in under three years. Open weights now power coding assistants, agents, and enterprise pipelines, and in some markets they've overtaken the proprietary models that defined the early days of the boom.

So how big is open source AI today? And how fast is it actually growing?

I pulled together the most useful open source LLM statistics I could find, all from primary sources like the Stanford AI Index, Hugging Face, Meta, OpenRouter, and the Stack Overflow Developer Survey. Each stat links to its source so you can cite it directly.

## Top Open Source LLM Statistics (Editor's Picks)

- Hugging Face hosts **over 2 million public models**, up from 1 million just over a year earlier. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))
- Meta's Llama models passed **1.2 billion downloads** by April 2025. ([TechCrunch](https://techcrunch.com/2025/04/29/meta-says-its-llama-ai-models-have-been-downloaded-1-2b-times/))
- The performance gap between the top open and closed models shrank from **8.04% to 1.70%** in a single year. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))
- The cost of GPT-3.5-level inference fell **more than 280x** in about 18 months. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))
- Chinese open models accounted for **41% of all Hugging Face downloads** in 2025, overtaking the U.S. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))
- Alibaba's Qwen family now has **over 113,000 derivative models**, more than Google and Meta combined. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))
- Open source models processed **roughly one-third of all tokens** on OpenRouter by late 2025. ([OpenRouter](https://openrouter.ai/state-of-ai))
- **84% of developers** now use or plan to use AI tools in their workflow. ([Stack Overflow](https://survey.stackoverflow.co/2025/ai/))

## How many open source LLMs are there?

There are **over 2 million public models** on Hugging Face, the largest hub for open models. The platform also hosts more than 500,000 public datasets and serves a community of over 13 million users. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

The pace of growth is the real story. The first million models took more than 1,000 days to accumulate after tracking began in March 2022. The second million arrived in just 335 days. ([AI World](https://aiworld.eu/story/hugging-faces-two-million-models-and-counting))

| Milestone | Time to reach |
| --- | --- |
| First 1 million models | 1,000+ days |
| Second 1 million models | 335 days |

Most of those models see little use. About half of all models on the Hub have fewer than 200 total downloads, and the top 200 models, just 0.01% of the total, account for 49.6% of all downloads. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

The models people actually pull are also getting much larger. The mean size of a downloaded model grew from 827 million parameters in 2023 to 20.8 billion parameters in 2025. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

## Open source LLM adoption and usage

Open models have moved well past experimentation. On OpenRouter, which routed more than 100 trillion tokens in a year, open source models grew to roughly one-third of all usage by late 2025. ([OpenRouter](https://openrouter.ai/state-of-ai))

Three open families dominate that usage. DeepSeek led with 14.37 trillion tokens processed between November 2024 and November 2025, followed by Qwen and Llama.

| Open model family | Tokens processed (Nov 2024 to Nov 2025) |
| --- | --- |
| DeepSeek | 14.37 trillion |
| Qwen | 5.59 trillion |
| Llama | 3.96 trillion |

Source: [OpenRouter](https://openrouter.ai/state-of-ai)

Developer adoption of AI tooling is now near-universal. 84% of respondents to the 2025 Stack Overflow Developer Survey use or plan to use AI tools, up from 76% the year before, and 51% of professional developers use them daily. ([Stack Overflow](https://survey.stackoverflow.co/2025/ai/))

Enterprises are more cautious. By Andreessen Horowitz's count, open source models settled at about 13% of enterprise AI workloads in 2025, down from 19% six months earlier, as companies weighed support and compliance needs against cost savings. ([a16z](https://a16z.com/ai-enterprise-2025/))

## The most popular open source LLMs

For most of the open source era, **Meta's Llama was the default open model.** It reached 650 million downloads by December 2024, crossed 1 billion in March 2025, and hit 1.2 billion by April 2025. ([Meta](https://about.fb.com/news/2025/03/celebrating-1-billion-downloads-llama/), [TechCrunch](https://techcrunch.com/2025/04/29/meta-says-its-llama-ai-models-have-been-downloaded-1-2b-times/))

| Date | Llama cumulative downloads |
| --- | --- |
| December 2024 | ~650 million |
| March 2025 | 1 billion |
| April 2025 | 1.2 billion |

But 2025 was the year Alibaba's Qwen took the crown. Qwen overtook Llama in cumulative Hugging Face downloads by October 2025, and in December its single-month downloads exceeded the combined total of the next eight most popular models. ([Xinhua](https://english.news.cn/20260113/004b0522f987475cbf83ffc3a8d009aa/c.html))

Qwen is also the most built-on open model in the world. The family has over 113,000 direct derivative models, and more than 200,000 when you count every Qwen-tagged model, giving Alibaba more derivatives than Google and Meta combined. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

You can browse the leading open models, their licenses, and recommended hardware on the [OpenLLMStack models page](/models).

## Open vs. closed source: the performance gap

The quality gap between the best open and closed models has nearly disappeared. On the Chatbot Arena leaderboard, the top closed model led the top open model by 8.04% in January 2024. By February 2025, that lead had shrunk to just 1.70%. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))

| Date | Closed-vs-open performance gap |
| --- | --- |
| January 2024 | 8.04% |
| February 2025 | 1.70% |

In other words, the open source frontier closed roughly 80% of the gap in a single year. Releases like Llama 3, DeepSeek R1, and Qwen drove most of that convergence. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))

## Where open source models come from

The center of gravity in open source AI has shifted. Chinese models made up 41% of all Hugging Face downloads in 2025, and China surpassed the U.S. in monthly downloads during the year. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

The same shift shows up in usage. The share of U.S. models on OpenRouter fell from about 70% to 30% over the course of a year. ([OfficeChai](https://officechai.com/ai/share-of-us-models-being-used-on-openrouter-has-collapsed-from-70-to-30-over-the-past-year/))

Open source development is also less corporate than it used to be. Industry's share of model development on Hugging Face dropped from roughly 70% before 2022 to 37% in 2025, while independent and unaffiliated developers accounted for 39% of downloads. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

## The collapsing cost of open source inference

Running these models keeps getting cheaper. The cost of inference at GPT-3.5 quality fell more than 280-fold between November 2022 and October 2024, dropping from about $20 to $0.07 per million tokens. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))

The hardware underneath is improving too. Compute costs have fallen about 30% per year, while energy efficiency has improved roughly 40% per year. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))

A big share of that gain comes from smarter serving, not just cheaper chips. You can see the techniques behind it on the OpenLLMStack [optimizations page](/optimizations).

## DeepSeek: the breakout moment

No single release did more for open source AI's profile than DeepSeek R1. After its January 20, 2025 launch, the DeepSeek app was downloaded by over 3 million people in the first half of January alone. ([SEO.ai](https://seo.ai/blog/deepseek-users-downloads))

The app reached 16 million downloads in 18 days and topped the charts in 140 markets, and DeepSeek recorded 33.7 million monthly active users that month. ([SEO.ai](https://seo.ai/blog/deepseek-users-downloads), [DemandSage](https://www.demandsage.com/deepseek-statistics/))

Its website traffic jumped 312% in January 2025 compared with the month before, a surge driven entirely by interest in a low-cost open model that matched far more expensive proprietary systems. ([DemandSage](https://www.demandsage.com/deepseek-statistics/))

You can trace these milestones on the OpenLLMStack [timeline](/timeline).

## Frequently asked questions

### What is an open source LLM?

An open source LLM is a large language model whose weights are publicly released, so anyone can download, run, fine-tune, and deploy it on their own hardware. Most popular "open" models are more precisely open-weight, meaning the trained weights are free to use while the training data or code may not be fully published.

### Which open source LLM is the most popular?

Alibaba's Qwen is currently the most popular open source LLM. It overtook Meta's Llama in cumulative Hugging Face downloads in October 2025 and has more derivative models than any other family. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

### Is DeepSeek open source?

Yes. DeepSeek releases open-weight models, including DeepSeek R1, under permissive licenses, which is a large part of why the January 2025 launch spread so quickly across the developer community. ([SEO.ai](https://seo.ai/blog/deepseek-users-downloads))

### Are open source models catching up to closed models?

Largely, yes. The performance gap between the best open and closed models narrowed from 8.04% to 1.70% between January 2024 and February 2025 on the Chatbot Arena leaderboard. ([Stanford AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report))

### How many open source AI models are there?

Hugging Face, the largest model hub, hosts over 2 million public models as of 2026, though about half have fewer than 200 downloads. ([Hugging Face](https://huggingface.co/blog/huggingface/state-of-os-hf-spring-2026))

## The bottom line

Open source AI in 2025 and 2026 is defined by three trends: models that now rival closed systems on quality, inference costs that have collapsed, and a center of gravity shifting toward Chinese and independent developers. Open weights are no longer the budget option. For a growing share of teams, they're the default.

If you're building on open models, [OpenLLMStack](/) tracks the latest releases, inference engines, and optimization techniques in one place, so you can spend less time keeping up and more time shipping.
