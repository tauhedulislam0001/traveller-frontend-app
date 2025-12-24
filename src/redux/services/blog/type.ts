export type Blog = {
    id: number;
    category_id: number;
    category_name: string;
    feature_image: string;
    title: string;
    short_des: string;
    description: string;
    duration: string;
    views: number;
    created_by_id: number;
    created_by_name: string;
    status: number;
    created_at: string;
    updated_at: string;
};

export type BlogResponse = {
    status: number;
    success: boolean;
    message: string;
    count: number;
    data: Blog[];
}

export type BlogFeatureResponse = {
    status: number;
    success: boolean;
    message: string;
    count: number;
    data: Blog[];
}
