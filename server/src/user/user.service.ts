import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../interfaces/user.interface';
import { CreateUserDTO } from '../dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUsers(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async getUser(userID): Promise<User> {
    return await this.userModel.findById(userID).exec();
  }

  async getUserByName(userName): Promise<User> {
    return await this.userModel.findOne({ user_name: userName }).exec();
  }

  async addUser(createUserDTO: CreateUserDTO): Promise<User> {
    const newUser = await new this.userModel(createUserDTO);
    return newUser.save();
  }

  async editUser(userID, createUserDTO: CreateUserDTO): Promise<User> {
    return this.userModel.findByIdAndUpdate(userID, createUserDTO, {
      new: true,
    });
  }

  async deleteUser(userID): Promise<any> {
    return this.userModel.findByIdAndRemove(userID);
  }
}
