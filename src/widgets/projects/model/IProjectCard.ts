import { IGallery } from "@shared/model/IGallery"

export interface IProjectCard {
    address: string,
    completion_date: string,
    description: string,
    id: number,
    image: string,
    is_residence: string | null,
    gallery_images: IGallery[]
    lang_id: string,
    phone: string | null,
    quantity_rooms: string,
    status: string | null,
    title: string,
    type: string,
    type_color: string
}