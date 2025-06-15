export const apiUpload = async (file: File): Promise<void> => {
    //Псевдо загрузка, нужно заменить на реальную
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.2 ? resolve() : reject(new Error("Ошибка при загрузке"));
        }, 1000 + Math.random() * 1000); // 1–2 сек
    });
};