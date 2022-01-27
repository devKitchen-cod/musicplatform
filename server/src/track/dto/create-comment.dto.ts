import { ObjectId } from "mongoose";

export class CreateCommetDto{
  readonly username: string;
  readonly text: string;
  readonly trackId: ObjectId;
}