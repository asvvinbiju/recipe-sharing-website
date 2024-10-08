# Generated by Django 5.1 on 2024-09-07 13:25

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('recipes', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('followers', models.ManyToManyField(blank=True, default=0, related_name='following', to='users.userprofile')),
                ('saved_recipes', models.ManyToManyField(blank=True, related_name='saved_by', to='recipes.recipe')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('your_recipes', models.ManyToManyField(blank=True, related_name='created_recipe', to='recipes.recipe')),
            ],
        ),
    ]
