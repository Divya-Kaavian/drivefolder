import React, { useState } from "react";
import sibApiClient from "sendinblue-api";

const API_KEY = "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";
const client = new sibApiClient(API_KEY);

const TemplateBuilder = () => {
  const [templateData, setTemplateData] = useState({
    name: "My template",
    subject: "My template subject",
    htmlContent: "<h1>My template content</h1>",
  });

  const handleSubmit = async () => {
    try {
      const result = await client.templates.createTemplate(templateData);
      console.log("Template created!", result);
    } catch (error) {
      console.error("Error creating template:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={templateData.name}
          onChange={(e) =>
            setTemplateData({ ...templateData, name: e.target.value })
          }
        />
        <button type="submit">Create template</button>
      </form>
    </div>
  );
};

export default TemplateBuilder;
