<script>
  let { data } = $props();

  const member = data.member;
  console.log(member)
</script>

<h1>{member.name}</h1>