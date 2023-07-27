![](https://i.imgur.com/xG74tOh.png)

# Challenge 01

## Collecting data from companies

It was requested that an API be created to discover and store company data such as year of foundation, branch, number of employees, city, country, etc.

The project manager provided a ready-made API that can return this information from the domains of the companies' websites, which is the **Company Enrichment API** of the **Abstract API** website (https://www.abstractapi.com /api/company-enrichment), which has only 1 detail: this API requires **authentication**. But that's not a problem because our team knows how to authenticate in third-party api!!!

Para isso é necessário criar uma API que autentica e consulta os dados na API externa a partir do domínio requisitado à nossa API. Ao conseguir um resultado da API externa, guarda em um array em arquivo **JSON** chamado **empresas.json**.

Para garantir a performance utilizaremos programação assíncrona tanto para consultar a API externa com axios quanto para ler / escrever o arquivo JSON.

Let's see how our API works:

**GET /companies**

Our API must have only 1 resource **companies** that must be accessed through the address http://localhost:3000/companies.

This resource will only receive GET requests and must have a mandatory parameter in the route (path) called **dominioEmpresa**.

Upon receiving the company's domain through the parameter, we must send it to the external API to query the company's data.

The address of the external API that we must use for this is:

```
https://companyenrichment.abstractapi.com/v1/
```

In which we will add two query parameters:

- **api_key**: used for authentication and must have the test key as a value, which you must generate following the instructions below:

  - Create an account on the website `https://www.abstractapi.com/`
  - After creating the account, on the Dashboard home page, choose the API you want to integrate. For this exercise, you should choose `Company enrichment`
  - When clicking on the desired API, a page will open with all the API information, including the authentication key.

- **domain**: where we should send the company's domain that we received in the parameter of our API.

The object that will be returned from the external API will be the object that we will return in our API!

But before returning it, we must save what we found in the array of the **empresas.json** file. But for that, a rule was requested:

- Save only the results whose company name (**name** property of the returned object) is filled in correctly (do not come with null or undefined).

Therefore, we will keep in the array only the objects of the companies that are returned with the name filled in.

And regardless of how the data is returned from the external API, we will always return the exact same object in our API response.

Test for some companies you know the domain and don't forget to check if the JSON file is being filled in correctly!

For more practice, you can try integrating other Abstract API's using the authentication key you generated.

---

###### tags: `challenge` `node.JS` `database` `javascript` `sql` `postgres`
