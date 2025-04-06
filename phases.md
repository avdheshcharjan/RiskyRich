
# Enhanced "Risky Rich" AI Chatbot Concept

## Overview and Alignment with the Challenge

## PHASE 1:

**Risky Rich** is envisioned as a cheeky, intelligent AI chatbot that provides personalized financial insights to users about their insurance coverage gaps. This directly addresses the hackathon’s theme of **“AI-Powered Financial Insights & Advisory”**, by helping individuals make informed insurance decisions through an AI-driven conversation. The solution focuses on the common problem in Singapore of underinsurance – many people lack sufficient life or critical illness coverage despite rising risks. In fact, a 2022 study by the Life Insurance Association (LIA) found a **21% mortality protection gap and a 74% critical illness (CI) protection gap** among economically active Singaporeans ([](https://www.lia.org.sg/media/3972/lia-pgs-2022-press-release_final_8-sep-2023.pdf#:~:text=S%24373%20billion%20mortality%20protection%20gap2,life%20insurers%2C%20as%20well%20as)). This means the average person has only a fraction of the insurance needed for their family’s financial security. Risky Rich aims to narrow this gap by **providing tailored advice in a friendly chat format** and nudging users to consider appropriate coverage.

**How it works:** The chatbot greets the user in a personable, slightly irreverent tone – making the experience less intimidating than a formal financial consultation. It asks a series of **simple lifestyle and financial questions** (e.g. age, income, family situation, existing insurance coverage) and, using embedded financial norms and AI logic, identifies where the user is *“risky”* (underinsured). The output is a set of **personalized insights** highlighting which areas (e.g. critical illness, life/TPD, etc.) the user may want to bolster. Crucially, it doesn’t stop at gap identification – it also **links to relevant Singlife products** or resources as a next step, aligning with Singlife’s business while empowering the user to take action.

This enhanced concept maximizes alignment with the challenge by delivering an AI-powered advisory experience that is:
- **Personalized and Insightful:** It uses the user’s own inputs and compares against trusted financial guidelines to generate insights unique to them, rather than generic advice.
- **AI-Driven:** Incorporates predictive scoring or classification logic to assess insurance needs, ensuring there is real “smarts” behind the advice (not just static rules).
- **Conversational and User-Friendly:** Presented via a chatbot UX, making financial advice accessible and engaging – especially for younger, tech-savvy users who might avoid traditional advisory.
- **Action-Oriented:** Directly connects insights to Singlife’s offerings (conceptually integrating with a financial provider), thus bridging advice to real-world solutions.

By clearly addressing insurance planning – a key aspect of financial decision-making – through an AI chatbot, Risky Rich squarely meets the brief of enhancing decisions with **AI-powered financial advisory**
## Key Enhancements and Innovative Features

# PHASE: AI-Powered Insurance Gap Anaylsis
### AI-Powered Insurance Gap Analysis

At the core of Risky Rich is an **AI-driven engine for insurance gap detection and risk scoring**. Rather than a simple questionnaire with preset outputs, the solution will integrate a live AI prediction or scoring logic to analyze the user’s inputs. For the hackathon MVP, this could be implemented in a lightweight manner (e.g. a rule-based algorithm enhanced with machine learning techniques or a regression formula), with the goal of increasing technical depth.

- **Use of AI/ML Models:** We plan to incorporate a basic machine learning model (or heuristic algorithm) that takes in user data (age, income, dependents, existing coverage) and outputs a **“Protection Score”** or flags specific underinsured areas. For example, a decision tree or logistic regression could be trained (even on a dummy dataset) to predict the likelihood a user is underinsured in life or critical illness coverage. This adds a layer of sophistication beyond hard-coded rules. In practice, the model might combine multiple factors (e.g. if a user is young with dependents and low life coverage, flag a high risk in life insurance). By using an ML approach, the chatbot can also weigh answers in a nuanced way – mimicking how a human financial advisor prioritizes certain red flags (like having kids but no life insurance is a big gap, whereas being single with no life insurance might be less urgent).

- **Scoring and Recommendations:** The AI logic will compute a **personalized risk score or gap score** for each category of insurance. For instance, Risky Rich might say: *“On a scale of 0-100, your Life Insurance coverage score is 40 – indicating a significant gap”*. This score could be visualized or described to the user to make the advisory more tangible. The scoring takes into account how the user’s current coverage compares to normative benchmarks (discussed in the next section). Using such a quantitative score makes the advice feel more **data-driven and objective**, aligning with the “insights” aspect of the challenge. It also provides a way to track improvement (the user could hypothetically chat again after taking action to see a higher score).

- **Real-Time Analysis:** The chatbot will perform the gap analysis in real-time as the conversation progresses. For example, after the user provides their annual income and indicates they have, say, S$100k life coverage, the backend logic can immediately calculate the recommended amount (e.g. 9x income) and determine the shortfall. This could allow the bot to dynamically ask a follow-up like *“Do you have any other life policies or savings to cover your family? I notice your current life coverage is a bit low compared to norms.”* Such intelligence in the flow shows off AI integration (NLP could be used to interpret open-ended answers, and the model’s calculations guide the conversation).

- **Technical Depth:** By **going beyond a static Q&A** and incorporating these computations, Risky Rich demonstrates technical sophistication. A score calculation or prediction model involves handling numeric data, possibly using libraries or custom code – which the judges will recognize as a deeper build. This satisfies the rubric requirement of actual machine learning/algorithmic logic at play  Even if using dummy data, we will simulate a realistic model. *(For example, we might generate a synthetic dataset of 100 sample “users” with various profiles and a label for “underinsured or not”, then train a simple classifier. This model can then be embedded to classify the hackathon user in real-time.)* The specifics can be relatively simple but the key is to **demonstrate an AI-driven component** rather than if-else rules only.

By implementing AI-powered gap analysis, Risky Rich offers a **fresh approach** to financial advisory. It’s not just regurgitating what the user inputs – it’s analyzing and interpreting the data to produce insights (essentially acting like an AI financial advisor brain). This innovation helps the project stand out, directly addressing financial decision support through AI and earning strong marks on **Technical Depth & AI Integration** in the rubric 

### Data-Driven Personalization with Singapore Insurance Norms

To make the advice credible and tailored, the chatbot leverages **public data and industry norms specific to Singapore**. This is crucial for both personalization and ensuring the recommendations are in line with what local financial advisors would say (increasing feasibility and real-world relevance).

- **Incorporating LIA Guidelines:** Singapore’s Life Insurance Association provides well-known rough guides for insurance coverage. According to LIA, one should aim for about **9-10 times annual income in life insurance (death/TPD) coverage, and ~4 times annual income in critical illness coverage** ([What Is A Protection Gap ](https://www.income.com.sg/blog/what-is-a-protection-gap#:~:text=To%20ensure%20your%20family%20is,4%20times%20your%20annual%20income)). We will bake these guidelines into Risky Rich’s knowledge. For example, if a user’s annual income is S$50,000, the chatbot knows the **recommended life coverage is ~S$450k** and CI coverage ~S$200k. It will then compare the user’s reported existing coverage against these targets to identify shortfalls. Using these norms means the advice isn’t arbitrary – it’s based on established financial planning principles (which we will cite or mention to the user for transparency, e.g. “Based on guidelines from the Life Insurance Association of Singapore, ...”). This increases the **Relevance and Accuracy** of the insights.

- **Dummy/Public Datasets:** In addition to static guidelines, we can utilize any available public data on insurance adoption or costs in Singapore to enrich the advice. For instance, the LIA protection gap study provides statistics on what percentage of needs are typically met. We know that on average Singaporeans have only ~26% of required CI cover ([What is critical illness insurance? Do you really need it? | Singlife Singapore](https://singlife.com/en/blog/money/2024/what-is-critical-illness-insurance-do-you-really-need-it#:~:text=According%20to%20the%20Life%20Insurance,quarter%20of%20what%E2%80%99s%20needed)). Risky Rich can use such data to **benchmark the user against the average**. If a user has, say, 50% of the recommended CI cover, the bot could commend them for being above the national average (adding a bit of positive reinforcement), whereas if they have 0%, it can highlight how they are part of the majority with a large gap, and perhaps provide a gentle warning. We might also use dummy data to simulate different persona scenarios – e.g. a dataset of various ages/incomes and typical insurance holdings – to make the chatbot’s reasoning more robust. 

- **Personalized Gap Calculation:** Using the above norms, the chatbot calculates the **user’s protection gap in monetary terms**. This is essentially applying the formula: **Needed coverage – existing coverage = gap** ([What Is A Protection Gap ](https://www.income.com.sg/blog/what-is-a-protection-gap#:~:text=Determining%20your%20gap%20starts%20with,a%20simple%20formula)) ([What Is A Protection Gap ](https://www.income.com.sg/blog/what-is-a-protection-gap#:~:text=you%20should%20have%20get%20mortality,4%20times%20your%20annual%20income)). For example, if the user needs $500k life cover and has $100k, the gap is $400k. Risky Rich will present this clearly: *“It looks like you have a **$400k shortfall** in life insurance coverage.”* This quantified insight can be impactful to the user. It answers the question: *“How underinsured am I?”* in real terms. For critical illness, similarly, it can say *“Typically someone in your situation would have about $200k CI cover, and you have $0, so your gap is the full $200k.”* These numbers make the advice actionable. (We will ensure to handle such output carefully so as not to frighten the user, but to inform – possibly following up with how they might close that gap gradually.)

- **Localized Context:** The advice will be tuned to Singapore context in other ways as well. For instance, the bot might reference **MediShield Life** (the basic national health insurance) if the user has no health insurance, to remind that at least some hospitalization coverage exists, or mention CPF schemes like DPS (Dependants’ Protection Scheme) for basic life cover. It can also factor in common benefits: e.g. if the user is a young working adult, they likely have DPS coverage of S$70k by default – the bot can ask if they know about it, and include it in resources available. Incorporating such details shows a depth of understanding of the local financial landscape, boosting the **Innovation & Originality** and **Relevance** scores. Competing solutions might ignore these nuances, but we treat them as part of personalization.

In summary, Risky Rich’s recommendations are **data-backed**. By referencing industry benchmarks and perhaps small datasets, we simulate a level of expertise. This not only gives users confidence (the bot’s advice feels legit because it aligns with what financial planners or resources like MoneySense would say) but also demonstrates to judges that we did our homework to ground the solution in reality. It addresses a real need – bridging the protection gap – with numbers to prove it, showing **Impact potential** (a tangible way to improve users’ financial resilience).

### Engaging Chatbot UX and Tone

One of the most distinctive aspects of Risky Rich is its **conversational user experience**. This is not a dry form or calculator – it’s an interactive dialogue with a bit of personality. By making the tone engaging and the flow intuitive, we aim to increase user engagement and set our solution apart from typical financial tools.

- **Cheeky, Friendly Persona:** The chatbot adopts a friendly persona named *“Risky Rich”*. The name itself is a playful take on the idea of being “rich” but taking “risks” by not having insurance. The tone is **cheeky, witty, yet helpful**. For example, the bot might say things like, *“Let’s see how **financially bulletproof** you are 😉. I’ll ask a few quick questions – promise it won’t hurt!”* or if a user says they have no insurance at all, it might respond, *“Living on the edge, huh? 🏄‍♂️ Let’s fix that and make sure you stay *actually* living!”* This light-hearted approach lowers the barrier for users to discuss what is normally a serious and dull topic. It’s an innovative twist – **using humor in financial advisory** – which can be a differentiator in the eyes of judges (fulfilling the **Originality** criteria.

- **Clear Multi-Step UX Flow:** The conversation is structured as a clear sequence of steps, ensuring a smooth user experience:
  1. **Introduction & Consent:** Risky Rich introduces itself and explains in simple terms what it will do (e.g., “I’ll assess if you have enough insurance coverage by asking a few things. Ready?”). This manages user expectations and gets buy-in.
  2. **Lifestyle Questions:** The bot asks essential questions one by one. Key questions include:
     - Age (to gauge life stage risk).
     - Family situation (single/married, number of dependents) – important for assessing need for life insurance.
     - Employment status and approximate **annual income** (for coverage recommendations calculatio ([What Is A Protection Gap ](https://www.income.com.sg/blog/what-is-a-protection-gap#:~:text=To%20ensure%20your%20family%20is,4%20times%20your%20annual%20income))9】).
     - Existing insurance coverage details:
       - Do you have any **life insurance**? If yes, roughly how much sum assured?
       - Any **critical illness** coverage? (Yes/No and amount if yes).
       - Possibly ask about **TPD** or disability coverage limits if known, or implicitly consider it part of life cover.
       - Health insurance (shield plans) – a quick check (if none, suggest at least basic cover).
       - Any other insurance like personal accident? (This might be optional/extra).
     - Lifestyle risk questions (optional if time permits) such as: *“Do you smoke or have any health conditions?”* or *“Do you engage in high-risk sports?”* – these could fine-tune risk assessment or just be used for humor (e.g., if user says they skydive, bot quips about needing good coverage).
  3. **Analysis & Feedback:** After gathering info, the bot “thinks” (simulated with a typing indicator) and then presents the findings section by section:
     - **Summary of Current Coverage:** e.g., *“You told me you have S$100k life cover and no critical illness cover.”*
     - **Gap Analysis:** For each main area, state the recommended amount versus what they have:
       - Life/TPD: *“People like you typically carry around S$450k life insurance (about 9× incom ([](https://www.lia.org.sg/media/4008/basic-financial-planning-guide.pdf#:~:text=recommends%20coverage%20of%3A%20%E2%80%A2%209x,income%20for%20standard%20critical%20illness))1】. You have S$100k, so there’s a gap of ~S$350k.”*
       - Critical Illness: *“Recommended ~4× income for CI would be S$20 ([](https://www.lia.org.sg/media/4008/basic-financial-planning-guide.pdf#:~:text=recommends%20coverage%20of%3A%20%E2%80%A2%209x,income%20for%20standard%20critical%20illness))1】, and you have none, so you’re fully exposed.”*
       - Other areas: if health insurance = none, mention that’s risky (hospital bills can be huge), if personal accident = none but they do risky sports, mention it, etc.
     - **Risk Scores:** The bot can also display a fun gauge or just text: e.g., *“Overall Protection Score: 40/100 (Needs Improvement).”* It might color-code or use an emoji scale (🔥 if very risky, 🟢 if good).
  4. **Recommendations & Upsell:** Finally, for each gap identified, Risky Rich provides a recommendation:
     - *“Consider boosting your life cover. As a next step, check out **Singlife’s Term Life plan** which can cover you affordably.”* (with a link button)
     - *“Critical illness is a must-have for someone at your life stage. Perhaps look at **Singlife’s critical illness plans** for coverage.”* (link provided)
     - It can also offer to email the summary to the user or **connect them with a Singlife advisor** for further guidance (this could be simulated via a simple contact form).
  5. **Closing:** End on a positive note: *“It’s been a pleasure analyzing your financial safety net! Stay safe and feel free to chat again after you’ve acted on these tips. 🤖💬”*.

- **Visual Aids and Interface:** The chatbot interface will be designed for clarity:
  - The questions and answers appear as chat bubbles, perhaps with the Risky Rich avatar/icon on the left and user responses on the right (mimicking common messaging apps).
  - We will ensure the text is easy to read and that each question is delivered in manageable chunks (one at a time) so as not to overwhelm the user. Short prompts and maybe quick reply buttons for some answers (e.g., Yes/No options, or a multiple-choice for ranges of income) can speed up interactions.
  - For the recommendation output, important numbers or terms might be **bolded** (e.g. “**S$350k gap**” or “**4× your income**”) to grab attention. If time permits, we might include a simple bar graph or meter icon to visualize the user’s coverage vs. need – adding a visual punch to the demo.
  - Given the time constraint, we’ll likely keep the UI basic but clean (using a CSS framework or chatbot UI library to handle the layout).

- **Innovation in UX:** This conversational approach with a spunky tone is relatively novel in the fintech space where advice is often presented in charts or static text. It’s designed to **engage especially millennials and Gen Z users**, who research shows are open to AI-driven interactions for financial services and appreciate 24/7 digital assi ([Why Millennials Are Most Likely to Embrace AI in Insurance - YuLife](https://yulife.com/blog/why-millennials-embrace-ai-insurance/#:~:text=Why%20Millennials%20Are%20Most%20Likely,both%20Boomers%20and%20Gen%20Z))9-L37】. By making the interaction feel like chatting with a knowledgeable friend (who cracks the occasional joke), we differentiate Risky Rich from competitors. The originality in tone and approach should score well under **Innovation & Origina ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=Innovation%20%26%20Originality))1-L99】, and the clear, guided flow addresses the **Presentation (Clarity & Organization)** aspect – we can easily explain each step of what the user experiences.


## PHASE 2:
### Integration of Recommendations with Singlife Products

A key enhancement over the initial idea is a more concrete (albeit mock) **integration with Singlife’s offerings**. The chatbot not only identifies gaps but also serves as a bridge to products that can fill those gaps, creating a potential **win-win**: users get a solution, and Singlife gets a qualified lead or sale. 

- **Product Linking:** For each identified insurance gap, Risky Rich will provide a relevant Singlife product suggestion. For example:
  - If a life insurance shortfall is found, the chatbot can recommend Singlife’s **Term Life or Whole Life** insurance product (whichever is appropriate for the user’s profile). It could say: *“You might consider a term life policy. **Singlife’s Term Life plan** could get you that extra S$350k coverage for relatively low monthly cost – tap to learn more.”*
  - If a CI gap is found: *“You should look into Critical Illness cover. Check out **Singlife’s Multipay Critical Illness plan** – it’s a comprehensive CI insurance that could cover conditions like cancer, heart attack ([What is critical illness insurance? Do you really need it? | Singlife Singapore](https://singlife.com/en/blog/money/2024/what-is-critical-illness-insurance-do-you-really-need-it#:~:text=covered%20or%20have%20limited%20coverage,diagnosed%20Major%20Cancer))-L607】.”* (This both educates and upsells.)
  - If health insurance was lacking: *“Health insurance is crucial. While Singaporeans have MediShield Life, you might want an Integrated Shield Plan for better hospital coverage. Singlife offers competitive health insurance options as well.”*
  - These suggestions will be accompanied by **buttons or hyperlinks** that (in the demo) could open the Singlife website product pages. For instance, clicking “Singlife Term Life” could navigate to a pre-opened page or a placeholder since there is no API.

- **Conceptual API Integration:** Since we don’t have a real API from Singlife, we will simulate the integration. We might **pre-load product info** such as product names, brief descriptions, and URLs into our app. When the time comes, the chatbot uses this to populate the recommendation. Conceptually, we can explain that in a real-world scenario, the chatbot could call Singlife’s APIs to fetch latest product details or even rates for the user’s profile. We could also simulate sending the user’s interest to Singlife by, say, printing a console log or storing a “lead” in a database, which we can mention as a step. This demonstrates thinking about how the hack could be extended to a production integration, satisfying **Feasibility** considerations (showing we know how to implement if given the chance).

- **Innovation & Value-Add:** Integrating upsell links within an advice chatbot is somewhat original. Many chatbots stop at giving advice or generic info. Here, by linking directly to solutions, we demonstrate a path to **monetization and real-world impact** – the user can immediately act on advice, and Singlife (the sponsor) gets tangible value through potential product sign-ups. This addresses the **Impact (Potential for Real-World I ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=Potential%20for%20Real))-L279】 and Sustainability** aspects – the idea has a business model (lead generation for insurance sales) and isn’t just a cool tech demo. We will highlight that *“our chatbot could plug into Singlife’s sales funnel seamlessly, making it not just a hackathon prototype but a viable feature for the company.”* Judges will appreciate that we thought about adoption and next steps (aligning with rubric 4.1 and 4.3 on scalability and long-term evo ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=,or%20more%20complex%20use%20cases)) ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=Long))-L293】).

- **User Experience of Integration:** We intend to keep the transition smooth. After the chatbot lists the recommendations, it might ask *“Would you like to explore these solutions now?”* If the user says yes or clicks, it opens the product page (perhaps in a new window/tab if web, or displays a message *“(Opening Singlife page...)”*). We will not actually process any purchase – just direct them. Optionally, the chatbot could say *“I’ll also note that you’re interested in these products so a Singlife representative could follow up (if this were the real thing).”* This informs the user of the next step in a real usage scenario. For demo, we may simply describe this flow rather than implement it fully, due to time.

In sum, the integration piece shows originality in combining **advisory with actionable output**. It leverages the sponsor’s context to make the solution immediately useful. From a scoring perspective, this enhances **Relevance to the problem statement** (because it’s not advisory in abstract, it ties to actual financial products making it **practical**), and it demonstrates we’ve thought about **scalability** (the concept could easily be expanded to recommend various products or even investment advice in future, for different gaps).

### Originality and Unique Value Proposition

Bringing all the above points together, the enhanced Risky Rich chatbot offers a **unique value proposition** in the fintech/insurtech space:
- It tackles the well-documented issue of the protection gap in an **innovative way** – through an AI chatbot that combines humor with data-driven advice. This is **not a typical insurance calculator**. Traditional tools (like those on insurer websites or financial advisory worksheets) often require users to fill forms and read numbers, which can be tedious. Our chatbot transforms that process into a **conversational discovery**: more engaging and potentially more persuasive for the user.
- The **tone and personality** of Risky Rich set it apart. While many financial apps aim to be friendly, few adopt a genuinely cheeky persona for fear of appearing unprofessional. We believe there is a sweet spot where the bot can be both **credible and fun** – providing solid advice while using layman language and humor. This fresh approach could especially resonate with younger users who find financial planning boring or scary; it lowers the intimidation factor.
- The use of **real Singapore-specific data** in a chatbot is another differentiator. We’re not just training a generic AI model on some global dataset; we’re tailoring it to local norms (income, common coverage, CPF schemes, etc.). This **localization** is a creative angle that many hackathon teams might overlook if they build generic solutions. It shows domain knowledge and effort to align with the sponsor’s market.
- In terms of recommendation logic, we also introduce a bit of novelty: the idea of a **“coverage score”** and possibly dynamic prioritization. For example, if the user has multiple gaps, Risky Rich might **prioritize which gap to address first** (perhaps the one with the biggest financial risk). It could say, “Your most urgent gap is critical illness coverage, given you have none – that’s often even more crucial than life cover at your age. Let’s focus there first.” This kind of prioritization mimics human advisory and could be seen as an original touch in the logic (moving beyond a one-size-fits-all output).
- Finally, we can mention innovative future extensions (as part of originality/vision): Risky Rich could evolve to use **natural language understanding** to handle arbitrary user questions (like a user might ask “Why do I need 9x my income in life insurance?” and the bot could answer from its knowledge base). It could integrate with health or financial APIs to pull in data (e.g., retrieve CPF balance or existing insurance data with user permission to give even more precise advice). These ideas show an imaginative outlook and that our concept can grow – aligning with **Long-Term Evolution** in the  ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=4))-L290】.

By highlighting these unique features and visionary ideas, we will emphasize how our solution is **novel among financial advisory tools**. This should help maximize our **Content** score (especially on innovation) and intrigue the judges that this isn’t just rehashing known solutions.

## MVP Development Plan (12-Hour Hackathon)

Turning this concept into a Minimum Viable Product within 12 hours requires careful scoping and efficient execution. Below is a step-by-step plan, including essential features to implement first, optional enhancements if time permits, the tech stack we’ll use, how we’ll integrate with Singlife in the demo, and our strategy for testing and presenting the solution.

### Essential Features for MVP

These are the **must-have features** that form the core functionality and will be implemented first to ensure we have a working prototype:

- **Conversational Q&A Flow:** A functioning chatbot interface that can sequentially ask the user the key questions (as outlined in the UX flow above) and collect responses. This includes the dialogue management logic – moving from one question to the next based on answers (e.g., if user says they have no dependents, we might skip certain questions about family). This is the backbone of the user experience.

- **Insurance Needs Calculation:** Backend logic to calculate recommended coverage amounts for Life/TPD and Critical Illness based on user input (using the 9x and 4x income ([](https://www.lia.org.sg/media/4008/basic-financial-planning-guide.pdf#:~:text=recommends%20coverage%20of%3A%20%E2%80%A2%209x,income%20for%20standard%20critical%20illness))8-L81】). This will likely be a simple function that multiplies the user’s income and compares with provided coverage inputs.

- **Gap Detection & Output Generation:** Using the calculations, determine if the user is underinsured in each category. Prepare the output message that clearly states the gap (or sufficiency). For MVP, this can be straightforward text like *“You might need ~S$300k more in life coverage”*. It should cover at least Life/TPD and CI gaps, since those are primary. (If possible, also note health insurance gap if none, though we may treat that qualitatively.)

- **AI Scoring Mechanism:** Implement a basic risk scoring or categorization. If time is short, this could be as simple as a formula (for example, score = weighted sum of gaps or a percentage of coverage fulfilled). But we aim to demonstrate it as an AI feature, so even a simple pre-trained model on dummy data can be integrated here. Essential is to show that the bot’s advice is powered by an algorithm beyond hard-codes. The output could be a numeric score or a risk level (“low/medium/high risk”).

- **Recommendations with Product Links:** The chatbot must provide at least **two product recommendations**: one for life insurance (if a life gap exists) and one for CI (if CI gap exists). These should be presented with an actionable element (e.g., a hyperlink or a button saying “View Singlife CI Plan”). Even if the links just go to a placeholder or actual Singlife webpage, the feature should be there. This is essential to demonstrate the advisory-to-action flow.

- **Basic UI/UX Polish:** Ensure the chat interface is easy to use during the demo:
  - We need a start button or command to initiate the chat (or it can auto-start).
  - Display messages with a short delay or typing indicator to simulate natural conversation pacing.
  - Allow the user to input answers either via provided options or typing (for numeric inputs, a text field is fine).
  - The conversation should not crash on unexpected input – if possible, handle simple validation (e.g., if non-numeric where number expected, prompt again). Basic error-handling is essential for a smooth demo.

By focusing on the above, we ensure the MVP can **actually guide a user from start to finish** and produce meaningful results. These features are achievable within hours if we use the right tools, as detailed next.

## PHASE 3:
### Optional "Nice-to-Have" Features

If time allows or if we manage to implement the essentials quickly, we will add some of these enhancements to impress judges further. However, these are secondary to completing the core use case:

- **Natural Language Understanding (NLP):** Instead of strictly structured inputs, allow the user to type more free-form answers and use an NLP library or service to interpret them. For example, user might type “I’ve got one life policy of 100k” – the bot could parse that. Implementing full NLP is risky in 12 hours, so this is optional. A simpler partial implementation: allow the user to skip to certain questions or ask for clarification, and handle that gracefully.

- **Additional Coverage Areas:** Extend the gap analysis to other types of insurance:
  - *Total Permanent Disability (TPD) as separate:* if the user happens to know their TPD cover is different from life (some older policies or group plans have lower TPD), we could ask and factor that. But often life includes TPD, so this might not be needed.
  - *Personal Accident insurance:* maybe ask if they have one, and if not, lightly suggest it if they have an active lifestyle. We likely won’t have data to quantify this gap, so it would be a simple recommendation.
  - *Emergency savings:* as part of financial planning, we could ask if they have 6 months of expenses saved (since insurance is one aspect of safety net). If not, advise building that. This broadens the advice beyond insurance, showing a holistic view (but due to time, this is nice-to-have).
  
- **Gamification or Humor Elements:** Add small touches like awarding the user a funny “risk title” at the end (e.g., *“Daredevil Dan”* if they had many gaps, or *“Safety Susan”* if well-insured). Or incorporate a meme or GIF in the chat for comic relief (if the platform supports it). These could make the demo memorable but are optional fluff.

- **Save/Email Results:** An email capture at the end to send the user their summary and recommended next steps. This would show a real-world follow-up value (and could double as lead collection). Technically, this requires a form and using an email API or at least storing the data, which might be optional if pressed for time.

- **Enhanced UI:** If possible, integrate a better frontend framework for the chatbot:
  - Use a ready-made chatbot UI component (for example, BotUI or a React chatbot kit) to get nicer styling.
  - Include avatars (Risky Rich’s avatar and user avatar) for a polished look.
  - Possibly create a simple **landing page** around the chat, with a title, some instructions or branding (e.g., Singlife and hackathon logos) to make it look like a complete product. This can help during the presentation’s first impression.

- **More Advanced AI:** If we have time and data, improve the ML model:
  - Perhaps cluster users into profiles (young single, young parent, middle-aged, etc.) and tailor advice wording slightly for each.
  - Use a small neural network or more sophisticated algorithm for the risk scoring, just to showcase we tried something cutting-edge (this might be just on paper if time doesn’t permit full integration).
  - Integrate a generative AI (like a GPT API) to generate some of the chatbot’s responses dynamically, which could give it a more human-like flair. (This is a stretch goal given time and reliability concerns, but mentioning it shows forward thinking.)

These optional features would elevate the project but we will only do them if the core is done and stable. We will communicate to the judges which parts are MVP and which are “future enhancements” to show a roadmap.


## PHASE4: 
### Tech Stack and Architecture

To implement Risky Rich swiftly and effectively, we choose a tech stack that our team is comfortable with and that allows rapid prototyping of a chatbot with AI logic:

- **Frontend:** We will build a simple single-page web application for the chatbot UI. Likely using **HTML/CSS/JavaScript** with a lightweight framework:
  - **React.js** (with possibly a UI library like Material-UI or Chakra for quick styling) is an option if we need dynamic state management. React will help in rendering the conversation messages and managing the form inputs for answers.
  - Alternatively, to save time, we might use pure HTML with jQuery or vanilla JS since the interaction is linear (this avoids overhead of setting up a full React project). There are also open-source chatbot templates (like **BotUI** or **Tars** templates) we could leverage to handle message display; we’ll decide based on whichever lets us move fastest.
  - We will ensure it’s responsive (works on a laptop for demo, but also conceptually on mobile). Basic CSS to make chat bubbles and a scrollable chat area will be applied.

- **Backend/Server:** For the brains of the operation, we have a couple of choices:
  - A quick **Python Flask** server that exposes endpoints (e.g., `/next_question` or `/analyze`) and maybe uses a small ML model using libraries like scikit-learn or pandas for calculation. Python is great for handling the data logic and any machine learning parts. We could even prototype the model in a Jupyter notebook first (given the hack’s AI workshop, perhaps they expect use of AI libraries).
  - Alternatively, a **Node.js** backend using JavaScript (or TypeScript). This might simplify deployment if we decide to host the entire thing as one Node app serving the frontend and handling the API logic. Node also has packages for basic math and could call a Python script if needed for ML.
  - Given the 12-hour limit, we lean towards Python for the ML calculations (faster to implement math in Python for us), but we might embed the logic directly into the frontend (for instance, do calculations in JS) for simplicity. If the ML model is simple, we can even pre-compute any needed coefficients and just use JS.
  - **Data storage**: For the hack demo, we probably don’t need a persistent database. User inputs will be in memory (or just kept in the frontend state). If we capture an email or lead, we might simply print it out or store in a local JSON. Using a full database is not necessary at this stage and would slow us down.

- **AI/ML Implementation:** We plan to implement the scoring logic as follows:
  - Possibly train a small model offline in Python (e.g., use a Pandas DataFrame with some dummy data of `income, dependents, current_life_cov, current_CI_cov -> outcome` and train a decision tree). Save this model (or even just extract simple rules from it manually).
  - During runtime, the “prediction” can be done either by the Python backend (if we have one) or mimicked in JS. For example, if our model is basically linear (like gap % calculation), we can do it in JS easily.
  - If using Python Flask, we can incorporate the model with scikit-learn (load pickle model and run predict).
  - If using an external AI API (not likely needed), ensure it’s something we can call quickly. Perhaps OpenAI’s API could be used to generate a friendly phrased summary of the analysis (to add more AI flavor), but this depends on availability and reliability. We likely skip external APIs to avoid dependency.

- **Integration approach:** Since no external Singlife API, the integration is mostly front-end (links). We will hard-code the URLs to Singlife product pages. E.g., *Term Life Plan* link might go to `https://singlife.com/en/insurance/life-insurance` (if that’s the product page). We might fetch a bit of info (like product name and tagline) beforehand to display in the chat. That can be in a JSON or just in code.

- **Development Platform:** We will use our own machines or a cloud IDE to develop. If deployment is needed for demo, a simple hosting on GitHub Pages (for front-end) or Heroku/Render for backend can be done if time permits. Otherwise, we run it locally and demo via localhost.

This tech stack is chosen for **speed and familiarity**, ensuring we can get a functional chatbot rapidly. It’s also scalable later – for instance, the model could be swapped or improved, the front-end could be refined into a mobile app, etc., addressing **Technical Feasibility** for  ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=3))-L197】. Importantly, all components are achievable with minimal setup, which is crucial in a 12-hour hack.

### Integration Mockup with Singlife

Even without a real API, we want to **simulate a convincing integration** with Singlife’s systems and products. Here’s how we approach it conceptually and in the demo:

- **Product Information:** We will identify 2-3 Singlife products relevant to our scope before coding (likely by quickly researching Singlife’s website). For example:
  - *Singlife Term Life Insurance*
  - *Singlife Multipay Critical Illness*
  - Possibly *Singlife Health Insurance* (Integrated Shield) if needed.
  Each will have a URL and a one-liner benefit summary. We will incorporate these into our chatbot’s recommendation logic. Essentially, we create a small mapping in our code: `{ "life": {name: "Singlife Term Life", url: "...", desc: "affordable life protection" }, "ci": {name: "Singlife Multipay CI", url: "...", desc: "coverage for 132 conditions with multiple pa ([What is critical illness insurance? Do you really need it? | Singlife Singapore](https://singlife.com/en/blog/money/2024/what-is-critical-illness-insurance-do-you-really-need-it#:~:text=covered%20or%20have%20limited%20coverage,diagnosed%20Major%20Cancer))-L607】 }, ... }`. These descriptions can even be quoted from Singlife marketing materials to add realism.

- **Mock API Call:** During the demo, we might *describe* that *“the chatbot now calls Singlife’s product API to fetch the best match for the user’s needs”*. In reality, our code will just look up the mapping. But explaining it this way shows we know how it would work in production. We could simulate an API response as a JSON that we hardcode, and show that in our code or explain it in the architecture slide.

- **Lead Generation Concept:** We will also mention integration in terms of lead capture. For instance, after showing product links, the bot could ask *“Would you like someone from Singlife to contact you to assist further?”* If user says yes, we take their contact info. In the demo, we won’t actually send it to Singlife, but we’ll pretend that we would send an email or push to a CRM. We can show a message like *“<Thank you! We’ll pass your details to a Singlife representative.>”* to simulate this. Or simply highlight in our narration that *“in a real scenario, this is where we hand off the lead to Singlife’s sales team via an API/webhook.”*

- **Singlife Branding:** To honor the sponsor and make the integration obvious, we will use Singlife’s name and maybe logo in our UI if allowed. Perhaps the chat header says “Singlife - Risky Rich Advisor” with the logo. This shows a visual integration, implying it could be deployed on Singlife’s platform. It’s a conceptual integration but effective in presentation.

- **No API, No Problem:** Since we can’t do real backend calls to Singlife, we ensure all needed info is within our control. This avoids any live dependency that could fail during judging. Everything will be **self-contained**. We will be clear that this is a prototype, and actual integration would be straightforward (just connecting the endpoints).

By taking these steps, we convey that we’ve **thought through how our solution would plug into a real financial institution’s ecosystem**. This helps address **Feasibility and Scalability** – judges see that minimal modifications would make this a deployable feature for Singlife (or any insurer). It also leverages Singlife’s presence for credibility (users might trust the advice more knowing it’s backed by a known insurer, and Singlife gets a modern tool to engage customers).

### Quick Validation and Testing Strategy

Given the time crunch, we will adopt a **lean testing approach** to ensure our MVP works as intended and resonates with users:

- **Team Testing with Personas:** We will create 2-3 **user persona scenarios** (e.g., *“Alice: 30 years old, single, $50k income, no insurance”*, *“Bob: 40, married with two kids, $100k income, some insurance”*). For each persona, we’ll run through the chatbot flow to see if the outputs make sense. This helps catch logical issues. For instance, for Alice (no insurance), the bot should flag both life and CI gaps strongly; for Bob (maybe has some life cover but no CI), the bot should perhaps praise his life cover and focus on CI. We’ll verify the tone remains appropriate in each case.

- **Edge Case Testing:** We’ll test inputs at extremes or odd combinations:
  - Very high income vs. very low income (the calculations should still work and not produce absurd suggestions).
  - If user indicates they have *above* the recommended coverage (rare, but possible – say someone has 12x income in life cover), ensure the bot handles it (maybe says “You are well covered for life insurance! 👍 No gap there.”). We will code in such that if existing >= recommended, it doesn’t show a gap but gives positive feedback.
  - If user refuses to answer something or says “not sure”: we should have a default assumption or message (perhaps treat as zero for coverage if they’re not sure, and for income if not sure we might use the average income ~90k as a fallback or ask again). We might not have time to handle “not sure” logic thoroughly, but we’ll at least not crash.

- **Usability Feedback:** If possible, during a break we might ask a fellow participant or mentor to quickly try the chatbot and give feedback on the language or ease of use. Even a 5-minute user test can reveal if any question is unclear or if the bot responses are too verbose. We can then tweak wording. This ties into the **Validation** rubric – showing we sought some feedback or did a mini us ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=,or%20do%20a%20quick%20pilot))1-L229】.

- **Functionality Checklists:** We will maintain a small checklist of required functionalities and go through it before final demo:
  - Does the conversation flow from intro to recommendations without manual intervention?
  - Are the calculations accurate (double-check with a calculator for a sample input)?
  - Do the links/buttons work (ensure they actually link to something or at least are not broken)?
  - Cross-browser check if needed (likely just using one browser for demo, but ensure it works in that environment well).

- **Performance and Stability:** Since it’s a simple app, performance isn’t a huge concern, but we’ll make sure the UI responds quickly and the model computation is instantaneous (pre-computing anything heavy if needed). No infinite loops or errors should occur. We’ll run it multiple times to catch any random bugs.

Our testing will be mostly manual due to time, but thorough in the limited sense. We will also prepare backup plans: for example, if the live chatbot has an issue, have screenshots of the conversation ready in slides as a fallback. Planning for such contingencies ensures the **Demo Quality** isn’t compromised even if something goes unexpectedly wrong.

By doing these validation steps, we not only ensure a smooth demo but can also **speak about how we validated the idea**. We can mention to judges that we tested with hypothetical users and that the logic aligns with industry benchmarks (which is a form of validation that the advice is sound). This addresses rubric points under **Validation & Testing App ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=,or%20do%20a%20quick%20pilot))1-L229】 and shows a user-centric mindset.

### Demo Preparation and Pitch Strategy

In a hackathon, how we present is as important as what we built. We will prepare a compelling demo and pitch to maximize our scoring on **Presentation** and overall impression:

- **Storytelling Approach:** We plan to frame our demo as a story of a typical user. For example, start by introducing *“Meet Jane, a 28-year-old working in Singapore. She’s financially savvy but isn’t sure if she has enough insurance. She decides to chat with Risky Rich to find out.”* Then we will **live-demonstrate** the chatbot as if we are Jane. One team member will play the role of the user, interacting with the chatbot in real-time, while another narrates or highlights what’s happening if needed. This narrative makes it relatable and shows real usage.

- **Live Demo vs. Video:** If the environment allows, a live demo is impactful (scoring high for **Demo Qu ([Rubric_GDG.pdf](file://file-AxzVCBbXLTTQPwgu7kF1Ue#:~:text=Demo%20Quality%20%26%20Visual%20Aids))0-L148】 if it runs smoothly). We will ensure to use a reliable setup (if on our laptop, make sure screen is visible, internet is working, etc.). As a backup, we might record a short screen capture of the chatbot conversation beforehand, in case live demo fails. That video can be embedded in slides or quickly switched to. We’ll also have static screenshots on slides as a last resort (with key screens like the gap summary and recommendations).

- **Highlighting Key Features:** During the demo, we will explicitly point out the elements that correspond to rubric strengths:
  - When the bot does a calculation: *“Notice that the bot has figured out Jane’s coverage gap using AI logic. It’s not just a script – it’s applying the 9x/4x rule and our predictive model in real-time.”*
  - When the bot responds with humor or personalized text: *“The tone here is friendly and non-jargony – we wanted to create a new kind of user experience for financial advisory.”*
  - When product links appear: *“Here we show how it seamlessly integrates with Singlife’s products – bridging insight to action.”* (We’ll mention that clicking it would go to Singlife’s site.)
  - If possible, we’ll also show a quick peek into the “engine” – maybe a slide with the flowchart or a snippet of code, to demonstrate technical complexity. But we have to balance not to confuse non-technical judges. This could be addressed in Q&A if asked about AI details.

- **Slides and Visual Aids:** We will prepare a few slides to guide our pitch, but keep them visual and minimal text:
  - Slide 1: **Problem & Solution** – Underinsurance problem (with a stat like 74% ([](https://www.lia.org.sg/media/3972/lia-pgs-2022-press-release_final_8-sep-2023.pdf#:~:text=S%24373%20billion%20mortality%20protection%20gap2,life%20insurers%2C%20as%20well%20as))18-L22】) and our solution overview. Possibly a graphic of a chatbot or an illustrative image of someone chatting on a phone about insurance (to set context).
  - Slide 2: **How Risky Rich Works** – a simple flow diagram with 3-4 steps (Ask → Analyze (AI) → Advise → Act (link to product)). This shows we have a structured solution.
  - Slide 3: **Innovation** – bullet points or icons highlighting AI Model, SG data norms, Cheeky UX, Singlife integration.
  - Slide 4: **Demo** – we might switch to the live demo here rather than a slide. But the slide can say “Demo Time – meet Risky Rich!”.
  - (Optional) Slide 5: **Tech Stack & Feasibility** – quick list of tech used, and a note that it’s deployable, plus future features. This helps address judges’ concerns about scalability and real-world adoption. We can mention things like cloud deployment, security considerations (e.g., “no sensitive data used, easy to integrate with compliance since it’s an advisory tool”).
  - Slide 6: **Impact & Conclusion** – reiterate how this helps users (financially more secure, educated) and helps Singlife (engage customers, potentially increase coverage uptake). End with why our team is excited about it.

- **Timing:** We likely have about 5 minutes to pitch (varies by hackathon). We’ll allocate ~2 minutes for introduction/problem, 2 minutes for demo, 1 minute for wrap-up. We will practice to ensure we fit in time and cover everything important without rushing. Clarity and conciseness are key for a good **Clarity & Organization*8-L136】.

- **Team Q&A Prep:** Anticipating questions:
  - **“What AI techniques did you use?”** – We’ll be ready to talk about our model or algorithm in simple terms (“a decision-tree based logic that classifies a user’s insurance gap severity using their profile, trained on guidelines and dummy data”).
  - **“How would you get people to use this? Isn’t insurance advice sensitive?”** – We’ll answer that this is an educational tool that could be integrated into marketing campaigns or on Singlife’s app/site to attract users. It’s not giving finite financial advice, but guidance, so it doesn’t replace licensed advisors – instead it can funnel interested users to advisors, making their job easier.
  - **“What’s the next step if you continued this project?”** – We’ll mention adding more data, possibly linking to MyInfo/CPF for auto-fetching insurance info, expanding to cover investments (so the same chatbot could advise on not just insurance but other financial planning areas, making it a comprehensive AI financial assistant).
  - **Technical scaling** – if asked, we’ll note the tech can be deployed on cloud (like GCP/AWS) and handle many users, and the AI model is lightweight (or could be expanded to something like an Azure ML service if needed).
  
- **Pitching for Points:** We will make sure to explicitly tie our solution back to the **rubric criteria** during the pitch:
  - *“As you can see, Risky Rich is fully aligned with the theme of AI-powered financial insights – it uses machine learning and financial data to give personal advice (Content: Relevance and Technical Depth).”*
  - *“We’ve introduced a novel user experience and approach to a known problem (Content: Originality).”*
  - *“The prototype is working – we just demoed the core features live (Presentation: Demo Quality) – and our explanation is straightforward (Presentation: Clarity).”*
  - *“This idea is feasible and impactful – underinsurance is a real problem, and a tool like this could realistically be launched by an insurer to improve customer engagement and coverage uptake (Impact & Feasibility).”*
  - By mirroring the rubric language, we subtly remind judges that we’ve checked all the boxes, hopefully leading to higher scores.

In preparation for the pitch, we will also ensure the team is coordinated on who says what, and that all required equipment (laptop, clicker, internet) are ready. We’ll have the environment set up beforehand to avoid any lag (for example, have the chatbot page loaded and reset, so we can just start). 

### Execution Timeline (12-hour Plan)

To manage our time effectively, we break down the development into phases with rough time allocations (knowing flexibility is needed):

1. **Ideation & Design (Hour 1):** Finalize the exact questions we’ll ask and the logic for analysis. Sketch the conversation flow on paper or a whiteboard. Decide on tech approach (e.g., confirm we use a simple web app + maybe Flask). This planning ensures once we start coding, we know what to build.

2. **Setup Environment (Hour 1):** Initialize the project repository. Set up basic app structure:
   - If using Flask + HTML: create Flask project, one route for index (serving HTML/JS), and maybe an API route for analysis.
   - If using pure front-end: set up an `index.html` with basic structure and include needed scripts.
   - Import any libraries or assets (e.g., jQuery, a CSS framework, etc., if we use them).
   - Quick test “Hello World” for the chatbot interface (display a sample message on screen).

3. **Implement Q&A Flow (Hours 2-4):** Start coding the front-end conversation logic:
   - Create a JSON or object for the questions sequence.
   - Code the function to display the next question and collect the answer.
   - For now, use simple prompts (no AI yet). By end of this, we should be able to simulate a full conversation with static responses (like user inputs stored).
   - Make sure we can capture user input values (store them in variables or state).

4. **Implement Backend Logic (Hours 4-6):** Work on the analysis part:
   - Code the calculation for recommended cover = 9x/4x income.
   - Subtract user’s provided cover to get gap.
   - Formulate response texts for different scenarios.
   - (If doing Python ML) Train or define the model by this point and integrate it. If doing in JS, implement the scoring formula here.
   - Test the logic with sample data without UI (e.g., via console prints or a temporary route that returns analysis for a dummy user) to ensure correctness.

5. **Integrate Analysis with Chat (Hour 6-7):** Connect the backend logic to the front-end flow:
   - After last user input, call the analysis (this could be an AJAX call to Flask or just a JS function call if logic is in JS).
   - Receive the results (gap numbers, recommendations).
   - Format the chatbot’s final messages with those results. Ensure the messages appear in sequence to mimic the bot explaining the analysis.
   - Insert the product recommendation links/buttons in the messages.
   - At this stage, we basically have the end-to-end function.

6. **Testing & Debugging (Hour 7-8):** Do the persona tests and edge cases as planned:
   - Refine any wording or fix any calculation bugs found.
   - Ensure the UI flow doesn’t get stuck anywhere.
   - If needed, shorten or split messages that are too long (better UX).
   - Confirm external links are correct (maybe open them once to see).

7. **UI Polish (Hour 8-9):** Add optional nice-to-have UI elements if we have time:
   - Basic CSS styling for bubbles (color differentiation between bot and user).
   - Add an avatar/icon for the bot.
   - Add a title or header on the chat window.
   - Maybe animate the scroll to new messages to always show latest message.
   - Ensure the interface looks decent on the projector by testing on a larger screen.

8. **Buffer/Contingency (Hour 9):** It’s wise to have some buffer. If we are behind, this hour goes to finishing essential features. If we’re on track, we can use it to implement one of the optional features (maybe the email capture or an extra question). It also can be used to start working on slides.

9. **Slide Deck & Demo Script (Hours 10-11):** While one or two members finalize the coding/testing, another can start on the presentation slides. We’ll gather as a team in Hour 11 to finalize the slides content (the points we decided above) and create any visuals needed (charts or pulling logos). We’ll outline who speaks when. If possible, do a quick dry run of the presentation.

10. **Final Run-Through (Hour 12):** In the last hour (or what’s left before submission), we’ll do a **full rehearsal** of the demo and pitch with the whole team. This helps with timing and confidence. We’ll also prepare the submission (usually a DevPost or similar) with a clear description aligning to judging criteria – essentially summarizing what we’ll say. Then ensure all files are saved, and everything is ready for the actual judging.

Following this plan allows us to methodically build and verify the product within 12 hours. The step-by-step breakdown shows we are organized – a point we can subtly bring up to demonstrate our project management (could be mentioned in Q&A or in the validation section of our presentation, to show we considered an agile approach).

## Conclusion and Future Roadmap

In conclusion, **Risky Rich** represents a compelling fusion of AI technology, user-centric design, and domain-specific knowledge to provide *“AI-powered financial insights & advisory”* in a novel way. We enhanced the original chatbot idea to strongly align with the hackathon’s goals: integrating live AI-driven calculations, using real financial norms as data, refining the chatbot’s user experience, and tying the outcomes to actionable product solutions. This comprehensive approach means our solution doesn’t just identify a problem – it guides the user towards solving it, which is the ultimate aim of advisory.

If given the opportunity to develop this further (beyond the hackathon MVP), our roadmap would include:
- **Integrating Real Data Sources:** e.g., pulling a user’s existing insurance data from Singlife (with permission) to auto-populate what policies they already have, making the advice more precise. This could be via Singlife’s user APIs or even national data like CPF insurance records.
- **Expanding Financial Advisory Scope:** Today insurance, tomorrow investments and savings. We can train Risky Rich to also review one’s savings rate, emergency fund, or even analyze their investment portfolio (tying back to the broader theme of financial insights, not just insurance). This could involve more AI, like portfolio optimization algorithms or connecting to market data for trend analysis.
- **Multi-Channel Deployment:** Deploy Risky Rich on popular platforms – as a WhatsApp or Telegram chatbot, or integrated into Singlife’s mobile app – to reach users where they are. A voice-enabled version could even be imagined (Alexa/Google Assistant skill for financial check-ups).
- **Continuous Learning:** With more usage, we could gather anonymous data on what gaps are most common and how users respond to advice. This can refine our AI model – perhaps even using reinforcement learning to see which recommendations lead to users taking action, and improving those suggestions.
- **Monetization & Sustainability:** Work with Singlife to perhaps offer incentives through the bot (e.g., a discount if they buy a recommended product via the chatbot link) to encourage usage and measure conversion. This ensures the project has a sustainable business impact and can be funded for further development (addressing long-term sustainability).

By articulating this future path, we reinforce that our hackathon solution is not a dead-end prototype but a seed of a viable product with real-world relevance. We believe Risky Rich can genuinely help many Singaporeans become better protected financially, in a way that’s engaging and smart. It’s a solution that the judges can envision scaling up (fulfilling **Impact and Scalability** goals), and it showcases the power of combining **AI with human-centric design** in fintech.

---

**References:**

- Hackathon Problem Statement – *“AI-Powered Financial Insights & Adv ([NTU GDG FinForge - Opening Ceremony.pdf](file://file-TJBCxnhmnVi9SopvNZ1EDB#:~:text=AI))7-L115】  
- Life Insurance Association of Singapore guidelines on recommended coverage (≈9× annual income for death/TPD, 4× for critical i ([](https://www.lia.org.sg/media/4008/basic-financial-planning-guide.pdf#:~:text=recommends%20coverage%20of%3A%20%E2%80%A2%209x,income%20for%20standard%20critical%20illness)) ([What Is A Protection Gap ](https://www.income.com.sg/blog/what-is-a-protection-gap#:~:text=To%20ensure%20your%20family%20is,4%20times%20your%20annual%20income))1-L269】  
- LIA Protection Gap Study 2022 – Singapore’s mortality protection gap 21%, critical illness  ([](https://www.lia.org.sg/media/3972/lia-pgs-2022-press-release_final_8-sep-2023.pdf#:~:text=S%24373%20billion%20mortality%20protection%20gap2,life%20insurers%2C%20as%20well%20as))18-L22】  
- Singlife article on critical illness coverage gap and recommendation of ~4× income c ([What is critical illness insurance? Do you really need it? | Singlife Singapore](https://singlife.com/en/blog/money/2024/what-is-critical-illness-insurance-do-you-really-need-it#:~:text=According%20to%20the%20Life%20Insurance,quarter%20of%20what%E2%80%99s%20needed))2-L560】  
- Singlife product info – e.g. Multipay Critical Illness covers 132 conditions and multiple  ([What is critical illness insurance? Do you really need it? | Singlife Singapore](https://singlife.com/en/blog/money/2024/what-is-critical-illness-insurance-do-you-really-need-it#:~:text=covered%20or%20have%20limited%20coverage,diagnosed%20Major%20Cancer))9-L607】 (used in chatbot recommendations)