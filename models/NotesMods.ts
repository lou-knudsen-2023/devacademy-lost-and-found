export interface NotesData{
    title:string
    description: string
    link:string
    image?: string | undefined;
    category:string
}

export interface Note extends NotesData{
    id:number
    added_by_user:string
}

export interface UserData extends NotesData{
    added_by_user:string
}



