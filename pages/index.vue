<template>
    <NavBar />
    <div class="flex w-full mt-5 mb-5">
        <div class="w-1/4 flex-grow card bg-base-300 rounded-box place-items-center">
            <PlayerStats />
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="grid w-3/4 flex-grow card bg-base-300 rounded-box place-items-center">
            <div class="w-full p-4">
                <div class="tabs mb-0 pb-0">
                    <a class="tab tab-lifted">Actions</a>
                    <a class="tab tab-lifted tab-active">Skills</a>
                    <a class="tab tab-lifted ">Shop</a>
                    <a class="tab tab-lifted">Inventory</a>
                </div>
                <div class="bg-base-100 mt-0 rounded-md p-4">
                    <SkillsTable />
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>