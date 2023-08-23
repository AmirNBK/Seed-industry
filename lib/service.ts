import { fetchAPI } from "./base";

export async function getQueryHeader() {
  const data = await fetchAPI(
    `
        query Header {
            pages {
              nodes {
                header {
                  items {
                    items {
                      label {
                        url
                        title
                      }
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].header.items[0];
}

export async function getQueryAboutUs() {
  const data = await fetchAPI(
    `
        query AboutUs {
            pages {
              nodes {
                homepage {
                  aboutUs {
                    description
                    title
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].homepage;
}

export async function getQueryProductsSlider() {
  const data = await fetchAPI(
    `
        query ProductsSlider {
            pages {
              nodes {
                homepage {
                  products {
                    product {
                      title
                      textColor
                      numberColor
                      number
                      fieldGroupName
                      description
                      boxColor
                      image {
                        sourceUrl
                      }
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].homepage;
}


export async function getQueryBlogsHomepage() {
  const data = await fetchAPI(
    `
        query BlogsHomepage {
            pages {
              nodes {
                homepage {
                  blogsAndNews {
                    title
                    color
                    category {
                      categories
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].homepage;
}

export async function getQueryBlogsOurValues() {
  const data = await fetchAPI(
    `
        query ValuesHomepage {
            pages {
              nodes {
                homepage {
                  ourValues {
                    singleValue {
                      title
                      description
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].homepage;
}


export async function getQueryAboutUsPage() {
  const data = await fetchAPI(
    `
        query AboutUsPage {
            pages {
              nodes {
                aboutUs {
                  aboutUsSection
                  intro {
                    title
                    description
                  }
                  strongPoints {
                    point {
                      title
                      description
                    }
                  }
                  history {
                    slide {
                      title
                      introline
                      description
                    }
                  }
                  foundation {
                    description
                    title
                    founderPic {
                      sourceUrl
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].aboutUs;
}


export async function getQueryProductsPage() {
  const data = await fetchAPI(
    `
        query ProductsPage {
            pages {
              nodes {
                products {
                  grassSeed {
                    product {
                      color
                      description
                      productName
                      image {
                        sourceUrl
                      }
                      instructions {
                        instruction
                      }
                    }
                  }
                  greenSeed {
                    product {
                      color
                      description
                      productName
                      image {
                        sourceUrl
                      }
                      instructions {
                        instruction
                      }
                    }
                  }
                }
              }
            }
          }
    `,
  );

  return data?.pages?.nodes[0].products;
}


export async function getQueryContactUs() {
  const data = await fetchAPI(
    `
    query ContactUs {
      pages {
        nodes {
          contactUs {
            title
            description
            contactInfos {
              email
              fieldGroupName
              location
              phone
            }
          }
        }
      }
    }
  `,
  );

  return data?.pages?.nodes[0].contactUs;
}