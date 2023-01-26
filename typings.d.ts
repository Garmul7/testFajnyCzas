interface MediaType {
    id: string,
    height: number,
    width: number,
    provider: string,
    providerData: string[],
    url: string,
}

interface LocationType {
    city: string,
    driving_directions: string,
    province: string,
}

interface EventType {
    id: string,
    type: string
    name: string
    company: object
    location: LocationType
    min_age: number
    max_age: number
    min_price: number
    max_price: number
    future_trips_count: number
    durations: string[]
    company_name: string
    categories: string[]
    location_types: string[]
    country_code: string
    country_name: string
    media: MediaType[]
    main_photo: null
    min_trip_start_date: string
    company_license_status: string
    score: null
    availability: string[]
    trip_type: string
    dates: string[]
}
export = EventType

