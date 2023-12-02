import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<Room>;

@Schema({
  timestamps: true,
})
export class Room {
  @Prop({ required: true })
  name: string;

  @Prop()
  image: string;

  @Prop({ required: true })
  isGroup: boolean;

  @Prop({ required: true })
  user_id: mongoose.Schema.Types.ObjectId;
}
export const RoomSchema = SchemaFactory.createForClass(Room);

RoomSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    delete returnedObject.passwordHash;
  },
});
