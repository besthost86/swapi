export const HEADER_COLUMNS_MAP = {
    people: [
        'name', 'height', 'mass', 'birth_year'
    ],
    films: [
       'title', 'director', 'opening_crawl', 'release_date'
    ],
    planets: [
        'name', 'diameter', 'climate', 'terrain'
    ],
    species: [
        'name', 'classification', 'average_lifespan', 'language'
    ],
    starships: [
        'name', 'length', 'cost_in_credits', 'hyperdrive_rating'
    ],
    vehicles : [
       'name', 'crew', 'vehicle_class', "max_atmosphering_speed"
    ] 
};

export type ApiEndpoints = keyof typeof HEADER_COLUMNS_MAP;

