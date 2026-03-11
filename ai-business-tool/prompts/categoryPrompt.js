const categoryPrompt = (productName, description) => {
  return `
You are an e-commerce AI assistant.

Product Name: ${productName}
Description: ${description}

Generate:

1. Primary category
2. Sub category
3. 5-10 SEO tags
4. Sustainability filters (plastic-free, compostable, vegan, recycled)

Return ONLY JSON in this format:

{
  "category": "",
  "sub_category": "",
  "seo_tags": [],
  "sustainability_filters": []
}
`;
};

module.exports = categoryPrompt;