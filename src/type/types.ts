
export interface History {
    id: number;
    user_email: string;
    exercises: Exercises[];
    date: string;
    new_record: number;
    workout_time: number;
    like: string[];
    image: string[];
    comment: string;
    nickname:string;
    comment_length:number;
    isvisible:boolean;
}

export interface Exercises{
    name : string;
    sets: Sets[];
    onerm : number;
    goal:number;
    date:string;
    isCardio:boolean;
}

export interface Sets{
    index:number;
    weight:number;
    reps:number;
    ischecked:boolean;
}
