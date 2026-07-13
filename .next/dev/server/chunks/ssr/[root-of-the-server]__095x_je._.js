module.exports = [
"[project]/components/meetups/MeetupDetail.module.css [ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "detail": "MeetupDetail-module__KoUlda__detail",
});
}),
"[project]/components/meetups/MeetupDetail.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeetupDetail
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$meetups$2f$MeetupDetail$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/meetups/MeetupDetail.module.css [ssr] (css module)");
;
;
function MeetupDetail(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$meetups$2f$MeetupDetail$2e$module$2e$css__$5b$ssr$5d$__$28$css__module$29$__["default"].detail,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                src: props.image,
                alt: props.title
            }, void 0, false, {
                fileName: "[project]/components/meetups/MeetupDetail.js",
                lineNumber: 5,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                children: props.title
            }, void 0, false, {
                fileName: "[project]/components/meetups/MeetupDetail.js",
                lineNumber: 6,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("address", {
                children: props.address
            }, void 0, false, {
                fileName: "[project]/components/meetups/MeetupDetail.js",
                lineNumber: 7,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                children: props.decription
            }, void 0, false, {
                fileName: "[project]/components/meetups/MeetupDetail.js",
                lineNumber: 8,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/meetups/MeetupDetail.js",
        lineNumber: 4,
        columnNumber: 9
    }, this);
}
}),
"[project]/pages/[meetId]/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MeetDetails,
    "getStaticPaths",
    ()=>getStaticPaths,
    "getStaticProps",
    ()=>getStaticProps
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs, [project]/node_modules/mongodb)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$meetups$2f$MeetupDetail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/meetups/MeetupDetail.js [ssr] (ecmascript)");
;
;
;
function MeetDetails({ meetupData }) {
    // If fallback was true, we'd need a guard, but with fallback: false, 
    // Next.js ensures meetupData exists before rendering.
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$meetups$2f$MeetupDetail$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        image: meetupData.image,
        title: meetupData.title,
        address: meetupData.address,
        description: meetupData.description
    }, void 0, false, {
        fileName: "[project]/pages/[meetId]/index.js",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
async function getStaticPaths() {
    const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
    const client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["MongoClient"].connect(uri);
    const db = client.db();
    const meetupData = db.collection('meetups');
    const data = await meetupData.find({}, {
        projection: {
            _id: 1
        }
    }).toArray();
    client.close();
    return {
        fallback: false,
        paths: data.map((meet)=>({
                params: {
                    meetId: meet._id.toString()
                }
            }))
    };
}
async function getStaticProps(context) {
    const meetId = context.params.meetId;
    const uri = 'mongodb+srv://meenakshi_sundaram:Ts4aU9Q5ios4VbbP@cluster0.rbuqx46.mongodb.net/meetups?appName=Cluster0&compressors=zlib';
    const client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["MongoClient"].connect(uri);
    const db = client.db();
    const meetupData = db.collection('meetups');
    // ✅ FIX 2: Added 'new' keyword and REMOVED '.toArray()'
    let selectedMeetup = null;
    if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"].isValid(meetId)) {
        selectedMeetup = await meetupData.findOne({
            _id: new __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f$mongodb$29$__["ObjectId"](meetId)
        });
    }
    client.close();
    if (!selectedMeetup) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title || '',
                address: selectedMeetup.address || '',
                image: selectedMeetup.image || '',
                description: selectedMeetup.description || ''
            }
        }
    };
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__095x_je._.js.map