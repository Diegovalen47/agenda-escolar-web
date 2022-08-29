export const queries = {
  getAllStudets:
    'SELECT * FROM `Student`',
  createNewStudent:
    'INSERT INTO `Student` SET ?',
  getStudentById:
    'SELECT * FROM `Student` WHERE studentId = ?',
  deleteStudent:
    'DELETE FROM `Student` WHERE studentId = ?',
  updateStudent:
    'UPDATE `Student` SET ? WHERE studentId = ?'
}