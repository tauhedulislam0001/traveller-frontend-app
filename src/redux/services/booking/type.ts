// ============================================
// BOOKING TYPES ONLY
// ============================================

// Main Booking Type
export type Booking = {
    id: number;
    booking_id: string;
    invoice_id: string;
    customer_id: number;
    customer_name: string;
    customer_email: string;
    customer_mobile: string | null;
    package_id: number;
    package_type: string;
    title: string;
    featured_image: string | null;
    tour_type: string | null;
    amount: number;
    tour_status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    payment_status: 'pending' | 'paid' | 'failed' | 'refunded';
    status: boolean;
    booking_date: string;
    tour_start_date: string;
    tour_end_date: string | null;
    number_of_guests: number;
    special_requests: string | null;
    cancellation_reason: string | null;
    created_at: string;
    updated_at: string;
    customer?: {
        id: number;
        full_name: string;
        email: string;
        mobile?: string;
        profile_image?: string;
    };
    tourPackage?: {
        id: number;
        title: string;
        package_type: string;
        featured_image: string | null;
        duration: number;
        duration_text: string;
        duration_type?: string;
        pricing: any[];
        short_description?: string;
        includes?: string[];
        excludes?: string[];
    };
};

// Booking List Request
export type BookingListRequest = {
    page?: number;
    per_page?: number;
    status?: string;
    payment_status?: string;
};

// Booking List Response
export type BookingListResponse = {
    success: boolean;
    message: string;
    data: {
        current_page: number;
        data: Booking[];
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
};

// Booking Details Response
export type BookingDetailsResponse = {
    success: boolean;
    message: string;
    data: Booking;
};

// Booking Store Request
export type BookingStoreRequest = {
    package_id: number;
    tour_start_date: string;
    number_of_guests: number;
    special_requests?: string;
};

// Booking Store Response
export type BookingStoreResponse = {
    success: boolean;
    message: string;
    data: {
        booking: Booking;
        payment_url?: string;
    };
};

// Booking Cancel Request
export type BookingCancelRequest = {
    id: number | string;
    cancellation_reason?: string;
};

// Booking Cancel Response
export type BookingCancelResponse = {
    success: boolean;
    message: string;
    data: Booking;
};

// Booking Stats
export type BookingStats = {
    total_bookings: number;
    pending_bookings: number;
    confirmed_bookings: number;
    completed_bookings: number;
    cancelled_bookings: number;
    total_revenue: number;
    paid_revenue: number;
    pending_payment: number;
};