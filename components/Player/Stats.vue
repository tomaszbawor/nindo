<script lang="ts" setup>
import { useMoney } from '../../store/money';

const money = useMoney();
</script>
<template>
    <section class="pt-5">
        <div>Player Stats</div>
        <div class="w-full gird grid-cols-2">
            <div>
                Level: 1
            </div>
            <div>
                Exp : 10k / 100k
            </div>
            <div>
                Energy: 10/ 100
            </div>
            <div>
                Ryo: {{ shortenNumber(money.ryuCount) }}
            </div>
        </div>

    </section>
</template>