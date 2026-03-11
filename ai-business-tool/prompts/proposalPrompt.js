const proposalPrompt = (clientType, budget, goal) => {
  return `
You are a sustainability packaging consultant.

Client Type: ${clientType}
Budget: ${budget}
Goal: ${goal}

Generate:

1. Suggested sustainable product mix
2. Budget allocation
3. Estimated cost breakdown
4. Impact positioning summary

Return JSON only:

{
 "product_mix": [],
 "budget_allocation": {},
 "cost_breakdown": {},
 "impact_summary": ""
}
`;
};

module.exports = proposalPrompt;