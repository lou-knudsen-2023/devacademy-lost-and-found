export interface NotesData{
    title:string
    description: string
    category:string
    group_id:number
    added_by_user:string
}

export interface Note extends NotesData{
    id:number
}


