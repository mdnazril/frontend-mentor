"use client";
import React, { useState } from 'react'
import MenuButton from '@/components/MenuButton';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import moment from 'moment';
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, } from "@/components/ui/form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import arrow from "@/assets/age-calculator-app/icon-arrow.svg";

type Props = {}

const page = (props: Props) => {

    const thisYear = new Date().getFullYear();

    const [age, setAge] = useState<valueProps>({ years: undefined, months: undefined, days: undefined });

    const formSchema = z.object({
        years: z.number({
            error: "Must be a valid year",
        }),
        months: z.number({
            error: "Must be a valid month",
        }),
        days: z.number({
            error: "Must be a valid day",
        }),
    })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            years: undefined,
            months: undefined,
            days: undefined
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {

        if (!values.years || !values.months || !values.days) return

        const birthDate = moment(`${values.years}-${values.months}-${values.days}`, 'YYYY-MM-DD');

        const now = moment();

        const years = now.diff(birthDate, 'years');

        const months = now.diff(birthDate.clone().add(years, 'years'), 'months');

        const days = now.diff(birthDate.clone().add(years, 'years').add(months, 'months'), 'days');

        setAge({ years, months, days });
    }

    return (
        <div className='bg-age-calculator-app-bg min-w-screen min-h-screen flex justify-center items-center relative'>

            <MenuButton challenge_link='https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q' />

            <div className='m-2 p-2 md:p-4 max-w-xl rounded-br-8xl bg-white'>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="flex justify-between gap-2 wrap-normal pr-0 md:pr-20">

                            <FormField
                                control={form.control}
                                name="days"
                                render={({ field }) => (
                                    <InputNumber
                                        id="days"
                                        placeholder="10"
                                        label="Day"
                                        max={31}
                                        field={field}
                                    />
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="months"
                                render={({ field }) => (
                                    <InputNumber
                                        id="months"
                                        placeholder="09"
                                        label="Month"
                                        max={12}
                                        field={field}
                                    />
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="years"
                                render={({ field }) => (
                                    <InputNumber
                                        id="years"
                                        placeholder="1997"
                                        label="Year"
                                        max={thisYear}
                                        field={field}
                                    />
                                )}
                            />

                        </div>

                        <div className='relative w-full bg-transparent'>
                            <Separator className='my-12' />
                            <Button type="submit"
                                className='cursor-pointer absolute top-1/2 right-1/2 md:right-0 translate-x-1/2 md:-translate-x-0 -translate-y-1/2 w-20 h-20 bg-black hover:bg-age-calculator-app-primary rounded-full flex justify-center items-center text-white'>
                                <img
                                    src={arrow.src}
                                    alt='arrow'
                                />
                            </Button>
                        </div>

                    </form>
                </Form>

                <div className='p-2'>

                    <BigLabel label="years" value={age.years} />
                    <BigLabel label="months" value={age.months} />
                    <BigLabel label="days" value={age.days} />

                </div>

            </div>

        </div>
    )
}

const InputNumber = ({ id, placeholder, label, max, field }: InputNumberProps) => {
    return (
        <FormItem className="grid w-full max-w-sm items-center gap-3 relative">
            <FormLabel htmlFor={id}>{label}</FormLabel>
            <FormControl>
                <Input
                    type="number"
                    id={id}
                    placeholder={placeholder}
                    className="font-bold text-lg lg:text-2xl px-4 py-6"
                    autoComplete="off"
                    max={max}
                    {...field}
                    onChange={(e) => {
                        const val = e.target.valueAsNumber;
                        field.onChange(max && +val > max ? max : val);
                    }}
                />
            </FormControl>
            <FormMessage className="absolute top-full text-xs mt-1" />
        </FormItem>
    );
};

const BigLabel = (props: LabelProps) => {
    const { label, value } = props;
    return (
        <p className='font-extrabold text-4xl md:text-6xl pt-4 pb-2'><span className='text-age-calculator-app-primary'>{value || "--"}</span> {label}</p>
    )
}

export default page

type InputNumberProps = {
    id: string;
    placeholder?: string;
    label: string;
    max?: number;
    field: {
        value: string | number;
        onChange: (value: string | number) => void;
        onBlur?: () => void;
        name?: string;
        ref?: React.Ref<any>;
    };
};

type valueProps = {
    years: number | undefined;
    months: number | undefined;
    days: number | undefined
}

type LabelProps = {
    label: string;
    value?: string | number;
}