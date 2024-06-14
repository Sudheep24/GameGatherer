import { Document, Schema, Model, model } from 'mongoose';

export interface IEvent extends Document {
    _id:string;
    title: string;
    address: string;
    date: Date;
    time: string;
    fee: number;
    slots: number;
    img: string;
    desc: string;
    category: {_id:string,name:string};
    organizer: {_id:string,firstName:string};
}

const EventSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    time: {
        type: String,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    slots: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

export const Event: Model<IEvent> = model<IEvent>('Event', EventSchema);
