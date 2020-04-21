import { Controller, Post, UseInterceptors, UploadedFile } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { editFileName, imageFileFilter } from "src/shared/file-upload.utils";
import { diskStorage } from 'multer';

@Controller('uploader')
export class UploaderController {

    @Post('image')
    @UseInterceptors(
    FileInterceptor('file', {
        storage: diskStorage({
          destination: './uploads',
          filename: editFileName, // для генерации уникального имени файла 
        }),
        fileFilter: imageFileFilter, //  для фильтрации файлов по расширению
    }),
    )
    async uploadedFile(@UploadedFile() file) {
        const response = {
            originalname: file.originalname, // Старое название 
            filename: file.filename, // 12332-465464-46546-564654.jpg
        };
        return response;
    }
}