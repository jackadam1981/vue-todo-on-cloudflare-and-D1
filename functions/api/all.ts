interface Env {
  todo: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  // Create a prepared statement with our query
  const ps = context.env.NORTHWIND_DB.prepare('SELECT * from todo');
  const data = await ps.first();

  return Response.json(data);
}