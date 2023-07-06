import HttpStatusCodes from '../../../constants/HttpStatusCodes';
import AppError from '../../../utils/appError';
import { SendEmailService } from '@src/frameworks/services/sendEmailService';
import { InstructorDbInterface } from '@src/app/repositories/instructorDbRepository';
export const getAllInstructorRequests = async (
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const allRequests = await instructorRepository.getInstructorRequests();
  if (allRequests.length === 0) {
    return null;
  }
  return allRequests;
};

export const acceptInstructorRequest = async (
  instructorId: string,
  instructorRepository: ReturnType<InstructorDbInterface>,
  emailService: ReturnType<SendEmailService>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const response = await instructorRepository.acceptInstructorRequest(
    instructorId
  );
  if (response) {
    emailService.sendEmail(
      response.email,
      'Successfully verified your profile',
      'You are verified'
    );
  }
  return response;
};

export const rejectInstructorRequest = async (
  instructorId: string,
  reason: string,
  instructorRepository: ReturnType<InstructorDbInterface>,
  emailService: ReturnType<SendEmailService>
) => {
  if (!instructorId || !reason) {
    throw new AppError(
      'InstructorId or reason cannot be empty',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const rejected = await instructorRepository.checkRejected(instructorId);
  if (rejected) {
    throw new AppError(
      'Already rejected this request',
      HttpStatusCodes.CONFLICT
    );
  }
  const response = await instructorRepository.rejectInstructorRequest(
    instructorId,
    reason
  );
  if (response) {
    emailService.sendEmail(
      response.email,
      'Sorry your request is rejected',
      reason
    );
  }
  return response;
};

export const getAllInstructors = async (
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const instructors = await instructorRepository.getAllInstructors();
  return instructors;
};

export const blockInstructors = async (
  instructorId: string,
  reason: string,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId || !reason) {
    throw new AppError(
      'Please provide instructor id and reason',
      HttpStatusCodes.BAD_REQUEST
    );
  }
  const response = await instructorRepository.blockInstructors(
    instructorId,
    reason
  );
  return response;
};

export const unblockInstructors = async (
  instructorId: string,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const response = await instructorRepository.unblockInstructors(instructorId);
  return response;
};

export const getBlockedInstructors = async (
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  const blockedInstructors = await instructorRepository.getBlockedInstructors();
  return blockedInstructors;
};

export const getInstructorByIdUseCase = async (
  instructorId: string,
  instructorRepository: ReturnType<InstructorDbInterface>
) => {
  if (!instructorId) {
    throw new AppError('Invalid instructor id', HttpStatusCodes.BAD_REQUEST);
  }
  const instructor = await instructorRepository.getInstructorById(instructorId);
  return instructor;
};