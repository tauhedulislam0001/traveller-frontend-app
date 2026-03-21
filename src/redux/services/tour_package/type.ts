// ============================================
// TOUR PACKAGE TYPES
// ============================================

// Main Tour Package type
export type TourPackage = {
    id: number;
    package_id: string;
    title: string;
    package_type: string;
    short_description: string;
    featured_image: string | null;
    gallery_images?: string[];
    duration: number;
    duration_type: string;
    duration_text?: string;
    pricing: any[] | null; // Change from number | null to any[] | null
    formatted_price?: string | null;
    tour_available: string | null;
    best_time_to_go: string[] | null;
    next_scheduled_tour: string | null;
    attractions?: any[];
    tour_highlights?: any[];
    tour_itinerary?: any[];
    includes?: string[];
    excludes?: string[];
    notes?: string[];
    faq?: any[];
    rating?: number;
    review_count?: number;
    created_at: string | null;
    updated_at?: string | null;
    price_range?: {
        min: number;
        max: number;
        min_final: number;
        max_final: number;
    };
    per_person_cost?: number;
}

// Update TourPackageListResponse
export type TourPackageListResponse = {
    success: boolean;
    message: string;
    data: {
        current_page: number;
        data: TourPackageListItem[];
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: any[];
        next_page_url: string | null;
        path: string;
        per_page: number;
        prev_page_url: string | null;
        to: number;
        total: number;
    };
    stats: {
        min_price: number;
        max_price: number;
        total_packages: number;
        package_types: string[];
        duration_types: string[]; // Keep as duration_types (plural) for stats
    };
    filters: {
        min_price: number | null;
        max_price: number | null;
        package_types: string[] | null; // Change from package_type to package_types
        duration_type: string[] | null; // Change to duration_type (singular) for filters
        month: string | null;
        search: string | null;
        price_from?: number | null;
        price_to?: number | null;
    };
}

// List item type
export type TourPackageListItem = {
    id: number;
    package_id: string;
    title: string;
    package_type: string;
    short_description: string;
    featured_image: string | null;
    duration: number;
    duration_type: string;
    duration_text: string;
    pricing: any[] | null; // Change to any[]
    price_range?: {
        min: number;
        max: number;
        min_final: number;
        max_final: number;
    };
    per_person_cost?: number;
    formatted_price: string | null;
    tour_available: string | null;
    best_time_to_go: string[];
    next_scheduled_tour: string | null;
    rating: number;
    review_count: number;
    created_at: string | null;
}

// Feature response type
export type TourPackageFeatureResponse = {
    success: boolean;
    message: string;
    data: TourPackageFeatureItem[];
}

export type TourPackageFeatureItem = {
    id: number;
    title: string;
    package_type: string;
    short_description: string;
    featured_image: string | null;
    duration_text: string;
    pricing: any[] | null;
    price_range?: {
        min: number;
        max: number;
        min_final: number;
        max_final: number;
    };
    per_person_cost?: number;
    formatted_price: string | null;
    rating: number;
}

// Top Destination response type
export type TourPackageTopDestinationResponse = {
    success: boolean;
    message: string;
    data: TourPackageTopDestinationItem[];
}

export type TourPackageTopDestinationItem = {
    id: number;
    title: string;
    featured_image: string | null;
    package_type: string;
    duration_text: string;
}

// Details request type
export type TourPackageDetailsRequest = {
    id: number;
}

// Details response type
export type TourPackageDetailsResponse = {
    success: boolean;
    message: string;
    data: TourPackageDetails;
}

export type TourPackageDetails = {
    id: number;
    package_id: string;
    title: string;
    package_type: string;
    short_description: string;
    featured_image: string | null;
    gallery_images: string[];
    duration: number;
    duration_type: string;
    duration_text: string;
    pricing: any[] | null;
    price_range?: {
        min: number;
        max: number;
        min_final: number;
        max_final: number;
    };
    per_person_cost?: number;
    formatted_price: string | null;
    tour_available: string | null;
    attractions: any[] | null;
    best_time_to_go: string[] | null;
    tour_highlights: any[] | null;
    next_scheduled_tour: string | null;
    tour_itinerary: any[] | null;
    includes: string[] | null;
    excludes: string[] | null;
    notes: string[] | null;
    faq: any[] | null;
    rating: number;
    review_count: number;
    created_at: string | null;
    updated_at: string | null;
    created_by?: {
        id: number;
        name: string;
    };
    updated_by?: {
        id: number;
        name: string;
    } | null;
}

// Related response type
export type TourPackageRelatedResponse = {
    success: boolean;
    message: string;
    data: TourPackageRelatedItem[];
}

export type TourPackageRelatedItem = {
    id: number;
    title: string;
    package_type: string;
    featured_image: string | null;
    duration_text: string;
    pricing: any[] | null;
    formatted_price: string | null;
    rating: number;
}

// Filter options response type
export type TourPackageFilterOptionsResponse = {
    success: boolean;
    message: string;
    data: {
        package_types: string[];
        duration_types: string[]; // Keep as duration_types (plural) for options
        price_range: {
            min: number;
            max: number;
        };
        duration_range: {
            min: number;
            max: number;
        };
        months: string[];
        total_packages: number;
    };
}

export type BookingSearchRequest = {
    package_type?: string; // Search by package type
    title?: string; // Search by title
    duration_type?: string; // Search by duration type (day/night)
    duration?: number; // Search by duration
};

export type BookingSearchResponse = {
    status: number;
    success: boolean;
    message: string;
    count: number;
    data: TourPackage[];
};