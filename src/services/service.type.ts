export interface ToolsResearchI {
    page: number
    limit: number
    search: string
}

export interface HouseListI extends ToolsResearchI {
    category_id?: string
}