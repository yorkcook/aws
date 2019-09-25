exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("productRoles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("productRoles").insert([
        { id: 1, product_id: 1, person_id: 1, role_id: 1 },
        { id: 2, product_id: 2, person_id: 2, role_id: 2 },
        { id: 3, product_id: 3, person_id: 3, role_id: 3 },
        { id: 4, product_id: 4, person_id: 4, role_id: 4 },
        { id: 5, product_id: 5, person_id: 5, role_id: 5 },
        { id: 6, product_id: 6, person_id: 6, role_id: 6 },
        { id: 7, product_id: 7, person_id: 7, role_id: 7 },
        { id: 8, product_id: 8, person_id: 8, role_id: 8 },
        { id: 9, product_id: 9, person_id: 9, role_id: 9 },
        { id: 10, product_id: 10, person_id: 10, role_id: 10 },
        { id: 11, product_id: 11, person_id: 11, role_id: 1 },
        { id: 12, product_id: 12, person_id: 12, role_id: 2 },
        { id: 13, product_id: 13, person_id: 13, role_id: 3 },
        { id: 14, product_id: 14, person_id: 14, role_id: 4 },
        { id: 15, product_id: 15, person_id: 15, role_id: 5 },
        { id: 16, product_id: 16, person_id: 16, role_id: 6 },
        { id: 17, product_id: 17, person_id: 17, role_id: 7 },
        { id: 18, product_id: 18, person_id: 18, role_id: 8 },
        { id: 19, product_id: 19, person_id: 19, role_id: 9 },
        { id: 20, product_id: 20, person_id: 20, role_id: 2 },
        { id: 21, product_id: 21, person_id: 21, role_id: 1 },
        { id: 22, product_id: 22, person_id: 22, role_id: 2 },
        { id: 23, product_id: 23, person_id: 23, role_id: 3 },
        { id: 24, product_id: 24, person_id: 24, role_id: 4 },
        { id: 25, product_id: 25, person_id: 25, role_id: 5 },
        { id: 26, product_id: 26, person_id: 26, role_id: 6 },
        { id: 27, product_id: 27, person_id: 27, role_id: 7 },
        { id: 28, product_id: 28, person_id: 28, role_id: 8 },
        { id: 29, product_id: 29, person_id: 29, role_id: 9 },
        { id: 30, product_id: 30, person_id: 30, role_id: 10 },
        { id: 31, product_id: 31, person_id: 31, role_id: 1 },
        { id: 32, product_id: 32, person_id: 32, role_id: 2 },
        { id: 33, product_id: 33, person_id: 33, role_id: 3 },
        { id: 34, product_id: 34, person_id: 34, role_id: 4 },
        { id: 35, product_id: 35, person_id: 35, role_id: 5 },
        { id: 36, product_id: 36, person_id: 36, role_id: 6 },
        { id: 37, product_id: 37, person_id: 37, role_id: 7 },
        { id: 38, product_id: 38, person_id: 38, role_id: 8 },
        { id: 39, product_id: 39, person_id: 39, role_id: 9 },
        { id: 40, product_id: 40, person_id: 40, role_id: 4 },
        { id: 41, product_id: 41, person_id: 41, role_id: 1 },
        { id: 42, product_id: 42, person_id: 42, role_id: 2 },
        { id: 43, product_id: 43, person_id: 43, role_id: 3 },
        { id: 44, product_id: 44, person_id: 44, role_id: 4 },
        { id: 45, product_id: 45, person_id: 45, role_id: 5 },
        { id: 46, product_id: 46, person_id: 46, role_id: 6 },
        { id: 47, product_id: 47, person_id: 47, role_id: 7 },
        { id: 48, product_id: 48, person_id: 48, role_id: 8 },
        { id: 49, product_id: 49, person_id: 49, role_id: 9 },
        { id: 50, product_id: 50, person_id: 50, role_id: 5 }
      ]);
    });
};
