const axiosInstance = require("../axios");
const fs = require("fs/promises");

const detailCompany = async (req, res) => {
  const { companyDomain } = req.query;

  try {
    const { data: company } = await axiosInstance.get(
      `/?domain=${companyDomain}`
    );

    if (company && company.name) {
      const companyData = JSON.parse(
        await fs.readFile("./src/data/companies.json")
      );
      companyData.push(company);

      await fs.writeFile(
        "./src/data/companies.json",
        JSON.stringify(companyData, null, 2)
      );
    }

    return res.json(company);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { detailCompany };
