import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { writeFile } from 'fs';
import path from 'path';

@Controller('upload')
export class UploadController {
  @Post('upload-file-csv')
  @UseInterceptors(FileInterceptor('csv'))
  uploadCsv(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    writeFile(`uploads/test.csv`, file.buffer, (err) => {
      if (err) throw err;
      console.log('The file has been saved!');
    });
  }
}
