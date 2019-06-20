export const TEST_PAGES_DATA = {
    pages: {
        "p1": {
            id: "p1",
            pages: ["p2", "p3"],
            level: 0,
        },
        "p2": {id: "p2", level: 1},
        "p3": {id: "p3", level: 1}
    },
    anchors: {"a1": {id: "a1"}, "a2": {id: "a2"}, "a3": {id: "a3"}},
    topLevelIds: ["p1"]
};

export const TEST_PAGES_STRUCTURE = [
    {
        id: "p1",
        level: 0,
        children: [
            {
                id: "p2",
                level: 1
            },
            {
                id: "p3",
                level: 1
            }
        ]
    }
];
