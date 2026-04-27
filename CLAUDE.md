# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ArkTI (罗德岛干员基准心理评估测试) is a psychological assessment application for Rhodes Island operators, themed around the mobile game "Arknights" (明日方舟).

### In-Universe Purpose

This is an in-universe psychological assessment used by Rhodes Island to:
- Build operator personality profiles for task assignment and team coordination
- Monitor psychological state changes over time through repeat assessments
- Optimize personnel deployment based on personality characteristics

**Important**: The Doctor (博士) is NOT administering this test — they ARE taking it AS an operator. This is an assessment FOR operators, not BY the Doctor.

## Project Structure

This is a simple frontend-only web project with no backend or build system currently configured. The project is in early planning/design phase with documentation only.

## Content Architecture

### Character-Personality Mapping

The project maps 16 MBTI personality types to popular Arknights characters (operators), organized into four groups:

- **NT (Analysts/理性者)**: INTJ, INTP, ENTJ, ENTP - logical, strategic characters
- **NF (Diplomats/理想主义者)**: INFJ, INFP, ENFJ, ENFP - empathetic, idealistic characters  
- **SJ (Sentinels/守护者)**: ISTJ, ISFJ, ESTJ, ESFJ - dutiful, traditional characters
- **SP (Explorers/探险家)**: ISTP, ISFP, ESTP, ESFP - action-oriented, present-focused characters

### Scoring Logic

The test uses 12 questions divided into 4 sections, each targeting one MBTI dimension:

1. **E/I (Extraversion/Introversion)**: Questions 1-3 about social behavior on Rhodes Island
2. **S/N (Sensing/Intuition)**: Questions 4-6 about information processing and mission approach
3. **T/F (Thinking/Feeling)**: Questions 7-9 about decision-making style
4. **J/P (Judging/Perceiving)**: Questions 10-12 about planning and resource management

Each answer choice adds points to one side of a dimension. Final personality type is determined by which side scores higher in each dimension, forming a 4-letter code (e.g., INTJ).

## Design Guidelines

### Visual Style (UI)

The UI should emulate Arknights' "Siren Records" or "Rhodes Island Terminal" aesthetic:

- **Color palette**: Black, white, gray base with bright blue or fluorescent yellow accents
- **Typography**: Sans-serif fonts for a tech/industrial feel
- **Elements**: Technological lines, functional/mechanical design elements, sci-fi aesthetic

### Content Source

Character information and assets should reference: https://prts.wiki/w/首页 (Arknights wiki)

### CRITICAL: No MBTI References in User-Facing Content

**IMPORTANT**: While the test is based on MBTI structure internally, NO MBTI-related terms should appear in user-facing content:

- ❌ Do NOT show: "INTJ", "MBTI", "Extraversion", "Introversion", "Sensing", "Intuition", "Thinking", "Feeling", "Judging", "Perceiving"
- ✅ DO show: Terra-themed/Arknights-themed personality metrics and descriptions
- Use in-universe terminology like "战术倾向" (tactical tendency), "决策模式" (decision pattern), "行动风格" (action style), etc.
- Results should display character names and descriptions without exposing the underlying MBTI type codes
- Internal code can use MBTI logic for scoring, but the presentation layer must be fully themed

## Development Notes

- This is a frontend-only project with no server-side components
- No build system, package manager, or framework has been selected yet
- All content is in Simplified Chinese
- User-facing content must follow the Terra-themed presentation guidelines (no MBTI references)
