

export function Yelp(term, location, sortBy) {
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
        Authorization: `Bearer ${apiKey}`
        }
    }).then(response => {
        return response.json();
    }).then(jsonResponse => {
        console.log("total");
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => ({
            id: business.id,
            imageSrc: business.image_url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
            url: business.url
        }));
        }
    });
}