const dataJson = [
    {
      id: "1",
      label: "Parent1",
      children: [
        {
          id: "1-a",
          label: "Parent1-a"
        },
        {
          id: "1-b",
          label: "Parent1-b"
        },
        {
          id: "1-c",
          label: "Parent1-c"
        }
      ]
    },
    {
      id: "2",
      label: "Parent2",
      children: [
        {
          id: "2-a",
          label: "Parent2-a"
        },
        {
          id: "2-b",
          label: "Parent2-b",
          children: [
            {
              id: "2-b-i",
              label: "Parent2-b-i"
            },
            {
              id: "2-b-ii",
              label: "Parent2-b-ii"
            },
            {
              id: "2-b-iii",
              label: "Parent2-b-iii"
            }
          ]
        },
        {
          id: "2-c",
          label: "Parent2-c"
        }
      ]
    }
  ];
  export default dataJson;
  