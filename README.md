## RiskyRich: Comprehensive Insurance Gap Analysis Agent

RiskyRich is an advanced AI agent specializing in comprehensive insurance gap analysis and financial risk assessment.

### Core Capabilities

#### Insurance Gap Analysis
- Conducts thorough evaluations of current insurance coverage
- Identifies critical gaps in personal and business insurance policies
- Analyzes potential financial exposures and liability risks
- Provides tailored recommendations to close insurance gaps

#### Risk Assessment
- Evaluates financial risks across multiple dimensions
- Generates detailed risk profiles for individuals and businesses
- Quantifies potential financial impacts of uncovered risks
- Develops risk mitigation strategies and prioritization frameworks

#### Policy Evaluation
- Reviews existing insurance policies for adequacy and completeness
- Compares coverage against industry benchmarks and standards
- Identifies policy limitations, exclusions, and potential claim issues
- Suggests policy modifications and enhancements

### Interactive Features

#### Conversational Interface
- Engages users in natural language dialogue about insurance needs
- Asks probing questions to uncover unstated or overlooked risks
- Explains complex insurance concepts in accessible language
- Maintains conversation history for contextual understanding

#### Multi-Channel Communication
- Accessible through web interface for direct interaction
- Optional Telegram integration for mobile accessibility
- WhatsApp connectivity for convenient messaging
- Customizable notification system for risk alerts

#### Document Processing
- Analyzes existing insurance policy documents
- Extracts key information from declarations pages
- Interprets coverage limits, deductibles, and exclusions
- Processes financial statements to evaluate risk exposure

### Specialized Analysis

#### Industry-Specific Assessment
- Tailored analysis for different business sectors
- Industry-specific risk identification and benchmarking
- Regulatory compliance verification for insurance requirements
- Sector-based coverage recommendations

#### Life Stage Analysis
- Customized insurance needs assessment based on life events
- Coverage recommendations for major transitions (marriage, children, retirement)
- Estate planning and legacy protection analysis
- Long-term care and disability risk evaluation

#### Catastrophe Modeling
- Natural disaster exposure assessment
- Business continuity impact analysis
- Supply chain vulnerability evaluation
- Disaster recovery insurance adequacy testing

### Advanced Features

#### AI-Powered Recommendations
- Generates personalized recommendations using Gemini models
- Leverages machine learning for risk pattern recognition
- Applies predictive analytics to anticipate future risk exposures
- Continuously improves through interaction and feedback

#### Web Research Capabilities
- Conducts real-time research on industry best practices
- Accesses current insurance product information
- Monitors regulatory changes affecting insurance requirements
- Retrieves relevant case studies and claim examples

#### Financial Integration
- Connects with financial data to assess potential loss impacts
- Evaluates cost-benefit analysis of coverage options
- Calculates optimal deductible and premium combinations
- Provides ROI assessments for risk management investments


## Prerequisites

- Node.js (v18+)
- pnpm (v8+)

## Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/avdheshcharjan/finforge.git
cd finforge
pnpm install
```

### 2. Build Required Packages

```bash
pnpm build
```

### 3. Run with a Specific Character

```bash
pnpm start --character="characters/riskyrich.character.json"
```

This will start the agent with the RiskyRich character. The server typically runs on port 3000.

### 4. Start the Client (in a separate terminal)

```bash
pnpm start:client
```

Visit http://localhost:5173 to interact with your agent.

## Local Development

### Project Structure

```
finforge/
├── agent/             # Main agent runtime
├── packages/          # Core packages and plugins
│   ├── core/          # Core framework
│   ├── client/        # Web client
│   ├── client-telegram/ # Telegram integration
│   └── ...            # Other plugins and adapters
└── characters/        # Character definitions
```

### Creating a Custom Character

1. Copy an existing character file from the `characters/` directory
2. Modify the JSON to customize your character
3. Run with your custom character:
   ```bash
   pnpm start --character="characters/your-character.json"
   ```

### Developing Plugins

To develop a new plugin:

1. Create a new package in the `packages/` directory
2. Implement the required plugin interface
3. Build your plugin: `pnpm build --filter=your-plugin`
4. Reference your plugin in your character file

## Troubleshooting

### Plugin Loading Issues

If you encounter errors with plugins not loading:

- Ensure all packages are built: `pnpm build`
- Check that package names in imports match the actual package names in package.json files
- For local plugins, ensure relative paths are correct

### Telegram Integration

If you want to use the Telegram plugin:

1. Create a bot through BotFather on Telegram
2. Add your Telegram bot token to your environment:
   ```
   CHARACTER.YOURAGENT.TELEGRAM_BOT_TOKEN=your_token_here
   ```
3. Restart your agent

## Environment Variables

Create a `.env` file in the root directory with the following settings:

```
# Required for basic functionality
SERVER_PORT=3000
CACHE_STORE=DATABASE

# Essential API Keys
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key  # Required for AI model access
TAVILY_API_KEY=your_tavily_key  # Required for web search capabilities

# Integration-specific keys (only needed if using these features)
TELEGRAM_BOT_TOKEN=your_telegram_token  # Required for Telegram integration
WHATSAPP_ACCESS_TOKEN=your_whatsapp_token  # Required for WhatsApp integration
WHATSAPP_PHONE_NUMBER_ID=your_phone_id  # Required for WhatsApp integration

# Character-specific API keys (alternative way to provide keys)
CHARACTER.RISKYRICH.GOOGLE_GENERATIVE_AI_API_KEY=your_api_key
```

You can obtain these API keys from:
- Google AI: https://ai.google.dev/
- Tavily: https://tavily.com/
- Telegram: Create a bot through BotFather on Telegram
- WhatsApp: Facebook Developer Console

See `.env.example` for more options.

