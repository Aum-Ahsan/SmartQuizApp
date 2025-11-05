export default [
    {
      id: 'q1',
      text: 'What does the SQL query below return?\n\n```sql\nSELECT COUNT(*) FROM employees WHERE salary IS NULL;\n```',
      answers: [
        'The number of employees with no salary value.',
        'Total number of employees.',
        'Average salary of employees.',
        'Employees whose salary is zero.',
      ],
    },
    {
      id: 'q2',
      text: 'Which SQL clause is used to filter grouped data?',
      answers: [
        'HAVING',
        'WHERE',
        'GROUP BY',
        'ORDER BY',
      ],
    },
    {
      id: 'q3',
      text: 'What is a correlated subquery?',
      answers: [
        'A subquery that uses values from the outer query.',
        'A subquery that returns a list of unrelated values.',
        'A subquery that runs independently of the outer query.',
        'A query that performs correlation between multiple tables.',
      ],
    },
    {
      id: 'q4',
      text: 'Which of the following statements about SQL indexes is true?',
      answers: [
        'Indexes can speed up data retrieval but slow down INSERT and UPDATE operations.',
        'Indexes are mandatory for primary keys but not foreign keys.',
        'Indexes automatically enforce data integrity.',
        'Indexes increase the size of a database table.',
      ],
    },
    {
      id: 'q5',
      text: 'What does the following SQL query do?\n\n```sql\nSELECT department, COUNT(*) FROM employees GROUP BY department;\n```',
      answers: [
        'Counts the number of employees in each department.',
        'Selects only departments with more than one employee.',
        'Filters employees based on department.',
        'Counts departments where employees exist.',
      ],
    },
    {
      id: 'q6',
      text: 'Which of the following is TRUE about a `LEFT JOIN`?',
      answers: [
        'It returns all records from the left table and matched records from the right table.',
        'It returns only the common records from both tables.',
        'It returns unmatched rows only from the left table.',
        'It excludes NULLs from the right table.',
      ],
    },
    {
      id: 'q7',
      text: 'What is the result of this query?\n\n```sql\nSELECT NULL + 1;\n```',
      answers: [
        'NULL',
        '1',
        '0',
        'Error',
      ],
    },
    {
      id: 'q8',
      text: 'Which normal form eliminates transitive dependency?',
      answers: [
        '3NF (Third Normal Form)',
        '1NF (First Normal Form)',
        'BCNF (Boyce-Codd Normal Form)',
        '2NF (Second Normal Form)',
      ],
    },
    {
      id: 'q9',
      text: 'What is the difference between `UNION` and `UNION ALL`?',
      answers: [
        '`UNION` removes duplicates, while `UNION ALL` includes all rows.',
        '`UNION ALL` sorts the result, while `UNION` does not.',
        '`UNION` can only be used with numeric types.',
        '`UNION` performs better than `UNION ALL` in all cases.',
      ],
    },
    {
      id: 'q10',
      text: 'What does the `WITH` clause (Common Table Expression) do in SQL?',
      answers: [
        'Creates a temporary result set that can be referenced in a SELECT, INSERT, UPDATE, or DELETE statement.',
        'Defines a permanent table alias.',
        'Creates stored procedures.',
        'Declares variables for a session.',
      ],
    }
  ];
  