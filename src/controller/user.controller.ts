import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import asyncWrapper from "../utils/asyncWrapper";
import { BOOL_FALSE, BOOL_TRUE, CODE_200, CODE_201, CODE_204, CODE_404, CREATED, DELETED, SUCCESS, USER_NOT_FOUND } from "../utils/constants";
import ApiError from "../utils/ApiError";
import ApiResponse from "../utils/ApiResponse";
import statusCodes from 'http-status-codes'
import { stat } from "fs";

const handleGetAllUser = asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
  const user = await User.find({});
  if (!user) {
    return next(new ApiError(CODE_404, USER_NOT_FOUND))
  }
  res.status(statusCodes.OK).json(new ApiResponse(CODE_200, user, SUCCESS, BOOL_TRUE))
});

const handleCreateUser = asyncWrapper(async (req: Request, res: Response) => {
  const user = await User.create(req.body);
  await user.save();
  // res.status(CODE_201).json({ CREATED, data: user.name })
  res.status(statusCodes.CREATED).json(new ApiResponse(CODE_201, user.name, SUCCESS, BOOL_TRUE))
});

const handleSingleUserById = asyncWrapper(async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  const user = await User.findById({ _id: userId })

  if (!user) {
    // res.status(CODE_404).json(USER_NOT_FOUND);
    res.status(statusCodes.NOT_FOUND).json(new ApiError(CODE_404, USER_NOT_FOUND))
  }
  // res.send(user);
  res.status(statusCodes.OK).json(new ApiResponse(CODE_200, user, SUCCESS, BOOL_TRUE))
})

const handleUpdateUserById = asyncWrapper(async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  const user = await User.findByIdAndUpdate({ _id: userId }, req.body, { runValidators: true, overwrite: true })

  if (!user) {
    // res.status(CODE_404).json(USER_NOT_FOUND);
    res.status(statusCodes.NOT_FOUND).json(new ApiError(CODE_404, USER_NOT_FOUND))
  }
  // res.send(user)
  res.status(statusCodes.OK).json(new ApiResponse(CODE_200, user, SUCCESS, BOOL_TRUE))
})

const handleDeleteUserById = asyncWrapper(async (req: Request, res: Response) => {
  const { id: userId } = req.params;
  const user = await User.findOneAndDelete({ _id: userId }, req.body)

  if (!user) {
    // res.status(CODE_404).json(USER_NOT_FOUND);
    res.status(statusCodes.NOT_FOUND).json(new ApiError(CODE_404, USER_NOT_FOUND))
  }
  // res.send(user)
  res.status(statusCodes.OK).json(new ApiResponse(CODE_204, user, DELETED, BOOL_TRUE))
})

export { handleGetAllUser, handleCreateUser, handleSingleUserById, handleUpdateUserById, handleDeleteUserById }