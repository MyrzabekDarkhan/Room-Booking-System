export interface Meetings {
    id?: number;
    creatorId: number;
    roomId:number;
    startTime:Date;
    endTime:Date;
    isCanceled:boolean;
    userId:number;
  }
  