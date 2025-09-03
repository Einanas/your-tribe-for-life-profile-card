export async function load ({ url, params }) { 
  // console.log(params.id)
  const memberResponse = await fetch(`https://fdnd.directus.app/items/person/` + params.id);
  const memberData = await memberResponse.json();

  return {member: memberData.data};

  // console.log()
}